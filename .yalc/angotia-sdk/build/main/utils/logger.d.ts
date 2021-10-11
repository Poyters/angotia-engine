import { LogConfig } from "../interfaces/logger.interface";
/**
 * Constructs a new Logger to track what's goin on in your application
 *
 * ### Example deep copy
 * ```js
 * const config = {
 *   APP_STARTED: {
 *     message: "Application started"
 *   },
 * }
 * const logger = newLogger(config, true)
 * logger.write("APP_STARTED")
 * // => "10/5/2021, 3:35:59 PM | INFO | Application started"
 * ```
 */
export declare class Logger {
    config: LogConfig;
    isEnabled: boolean;
    constructor(config: LogConfig, isEnabled: boolean);
    write: (logId: string, additionalData?: {}) => void;
}
