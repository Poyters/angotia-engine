import { User } from "../../../interfaces/user.interface";
import { Result } from "../../../types/result.type";
/**
 * Creates Angotia user (API) based on token. There is possibility to create
 * only one "Angotia Account" related to SSO account. So sso id is hightly
 * connected with "Angotia Account"
 *
 * ### Example
 * ```js
 * createUser("token")
 * // => [null, User]
 * ```
 *
 * @param token - Token provided by SSO
 * @returns Tuple of [Error, User]
 */
export declare const fetchUser: (token: string) => Promise<Result<User>>;
