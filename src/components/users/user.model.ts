import * as mongoose from "mongoose";
import { IUserProfile } from "interfaces/user.interface";
import { AccountType } from "models/accountType.model";

export interface IUser extends mongoose.Document {
  id: number | string;
  accountType: AccountType;
  created: number;
  ssoId: string;
  profile: IUserProfile;
}

export const UserSchema = new mongoose.Schema({
  created: { type: Number, required: true },
  ssoId: { type: String, required: true, unique: true },
  accountType: { type: String, enum: AccountType, required: true },
  profile: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    description: { type: String },
    avatar: { type: mongoose.Schema.Types.Mixed },
    backgroundPicture: { type: mongoose.Schema.Types.Mixed },
    companyName: { type: String },
    phone: { type: String },
    gender: { type: String },
    age: { type: Number },
    keywords: { type: [String] },
    pet: {
      types: { type: [String] },
      description: { type: String }
    }
  }
});
