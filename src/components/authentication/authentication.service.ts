import { Injectable } from "@nestjs/common";
import fetch from "node-fetch";
import { logger } from "../../scripts/utils/logger";

interface KeycloakUserInfoResponse {
  sub: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
}

export class AuthenticationError extends Error {}

@Injectable()
export class AuthenticationService {
  /**
   * Call the OpenId Connect UserInfo endpoint on Keycloak: https://openid.net/specs/openid-connect-core-1_0.html#UserInfo
   *
   * If it succeeds, the token is valid and we get the user info in the response
   * If it fails, the token is invalid or expired
   */
  async authenticate(token: string): Promise<string | null> {
    logger.write("AUTHENTICATE_BY_TOKEN");
    const url = `${process.env.SSO_URL}/realms/${process.env.SSO_REALM}/protocol/openid-connect/userinfo`;

    try {
      const response = await fetch(url, {
        headers: {
          authorization: token
        }
      });

      const reponseJson = (await response.json()) as KeycloakUserInfoResponse;
      const ssoId = reponseJson?.sub;

      if (ssoId) {
        logger.write("AUTHENTICATED_BY_TOKEN", { ssoId });
        return ssoId;
      }

      return null;
    } catch (e) {
      throw new AuthenticationError(e.message);
    }
  }
}
