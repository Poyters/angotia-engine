import { Character } from "../../../interfaces/character.interface";
import { Result } from "../../../types/result.type";
/**
 * Fetch all characters assigned to passed user (token)
 *
 * ### Example
 * ```js
 * fetchCharacters("token")
 * // => [null, Character[]]
 * ```
 *
 * @param token - Token provided by SSO
 * @returns Tuple of [Error, Character[]]
 */
export declare const fetchCharacters: (token: string) => Promise<Result<Character[]>>;
