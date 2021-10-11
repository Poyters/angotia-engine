import { Character } from "../../../interfaces/character.interface";
import { Result } from "../../../types/result.type";
/**
 * Fetch character by unique nick
 *
 * ### Example
 * ```js
 * fetchCharacterByNick("token")
 * // => [null, Character]
 * ```
 *
 * @param nick - Character nick
 * @returns Tuple of [Error, Character]
 */
export declare const fetchCharacterByNick: (nick: string) => Promise<Result<Character>>;
