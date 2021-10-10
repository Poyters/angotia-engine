import { User } from "../../../interfaces/user.interface";
import { Result } from "../../../types/result.type";
export declare const fetchUserForce: (token: string) => Promise<Result<User>>;
