import { Model } from "mongoose";
import { IUser } from "./user.model";
import { AuthenticationService } from "../authentication/authentication.service";
import { AccountType } from "models/accountType.model";
export declare class UsersService {
    private readonly userModel;
    private authenticationService;
    constructor(userModel: Model<IUser>, authenticationService: AuthenticationService);
    insertUser(token: string, accountType: AccountType, firstName: string, lastName: string): Promise<IUser>;
    private findBySsoId;
}
