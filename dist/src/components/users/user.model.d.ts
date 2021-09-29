import * as mongoose from "mongoose";
import { IUserProfile } from "interfaces/user.interface";
export interface IUser extends mongoose.Document {
    id: number | string;
    created: number;
    ssoId: string;
    profile: IUserProfile;
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<any, any, any>, mongoose.Model<mongoose.Document<any, any, any>, any, any>, undefined, {}>;
