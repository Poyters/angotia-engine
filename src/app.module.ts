import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { APP_GUARD } from "@nestjs/core";
import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard
} from "nest-keycloak-connect";
import { ThrottlerModule, ThrottlerGuard } from "@nestjs/throttler";
import { InfoModule } from "components/info/info.module";
import { UserModule } from "components/user/user.module";
import { InfoService } from "components/info/info.service";
import { AuthenticationService } from "components/authentication/authentication.service";
import { AuthenticationModule } from "components/authentication/authentication.module";
import { postgreConfig } from "configs/postgre.config";

console.log("postgreConfig", postgreConfig);
@Module({
  imports: [
    TypeOrmModule.forRoot(postgreConfig),
    KeycloakConnectModule.register({
      authServerUrl: process.env.SSO_URL,
      realm: process.env.SSO_REALM,
      clientId: process.env.SSO_CLIENT_ID,
      secret: process.env.SSO_SECRET
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10
    }),
    InfoModule,
    AuthenticationModule,
    UserModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard
    },

    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    InfoService,
    AuthenticationService
  ]
})
export class AppModule {}
