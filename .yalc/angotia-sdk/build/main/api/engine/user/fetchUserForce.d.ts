import { User } from "../../../interfaces/user.interface";
import { Result } from "../../../types/result.type";
/**
 * Fetch user data. After failure trying to create user based on the same token
 *
 * ### Example
 * ```js
 * fetchUserForce("token")
 * // => [null, User]
 * ```
 *
 * @param token - Token provided by SSO
 * @returns Tuple of [Error, User]
 */
export declare const fetchUserForce: (token: string) => Promise<Result<User>>;
