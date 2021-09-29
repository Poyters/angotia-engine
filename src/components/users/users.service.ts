import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IUser } from "./user.model";
import { AuthenticationService } from "../authentication/authentication.service";
import { log } from "../../scripts/utils/log";
import { IUserProfile } from "../../interfaces/user.interface";
import { userToPublic } from "scripts/user/userToPublic";
import { IUserPublic } from "interfaces/user.interface";
import { createNewUser } from "scripts/user/createNewUser";
import { AccountType } from "models/accountType.model";
import { isValidUserProfile } from "scripts/user/isValidUserProfile";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel("User") private readonly userModel: Model<IUser>,
    private authenticationService: AuthenticationService
  ) {}

  async insertUser(
    token: string,
    accountType: AccountType,
    firstName: string,
    lastName: string
  ): Promise<IUser> {
    log("START_INSERT_USER", { accountType, firstName, lastName });

    if (!token) {
      throw new HttpException("No access token", HttpStatus.UNAUTHORIZED);
    }

    const ssoId = await this.authenticationService.authenticate(token);
    const existingUser = await this.findBySsoId(ssoId);

    if (existingUser) {
      throw new HttpException("User already exists", HttpStatus.CONFLICT);
    } else {
      const newUser = new this.userModel(
        createNewUser(ssoId, accountType, firstName, lastName)
      );

      newUser.save();
      log("FINISH_INSERT_USER", { ssoId, accountType, firstName, lastName });

      return newUser;
    }
  }

  // async getUser(token: string): Promise<IUser> {
  //   log("START_GET_USER");
  //   const ssoId = await this.authenticationService.authenticate(token);
  //   const user = await this.findBySsoId(ssoId);

  //   if (!user) {
  //     throw new HttpException("User not found", HttpStatus.NOT_FOUND);
  //   }

  //   log("FINISH_GET_USER", { ssoId });
  //   return user;
  // }

  // async getPublicData(id: string): Promise<IUserPublic> {
  //   log("START_GET_PUBLIC_USER", { id });
  //   const user = await this.findById(id);

  //   if (!user) {
  //     throw new HttpException("User not found", HttpStatus.NOT_FOUND);
  //   }

  //   const publicUser = userToPublic(user);

  //   log("FINISH_GET_PUBLIC_USER", { id });
  //   return publicUser;
  // }

  // async getAllPublicData(): Promise<IUserPublic[]> {
  //   log("START_GET_EVERY_USER_PUBLIC_DATA");
  //   const users = await this.findAll();

  //   if (!users) {
  //     throw new HttpException("Users not found", HttpStatus.NOT_FOUND);
  //   }

  //   const publicUsers = users.map(user => userToPublic(user));

  //   log("FINISH_GET_EVERY_USER_PUBLIC_DATA");
  //   return publicUsers;
  // }

  // async updateProfile(
  //   token: string,
  //   updatedProfile: IUserProfile
  // ): Promise<IUser> {
  //   log("START_UPDATE_USER_PROFILE", updatedProfile);
  //   const ssoId = await this.authenticationService.authenticate(token);
  //   const user = await this.findBySsoId(ssoId);

  //   if (!user) {
  //     throw new HttpException("User not found", HttpStatus.NOT_FOUND);
  //   }

  //   const newUser = {
  //     profile: {
  //       ...updatedProfile,
  //       // Protect before overwriting
  //       firstName: user?.profile?.firstName,
  //       lastName: user?.profile?.lastName
  //     }
  //   };

  //   if (!isValidUserProfile(newUser.profile, user.accountType)) {
  //     throw new HttpException(
  //       "Passed invalid user profile",
  //       HttpStatus.UNPROCESSABLE_ENTITY
  //     );
  //   }

  //   await this.userModel.updateOne({ ssoId: ssoId }, newUser);

  //   log("FINISH_UPDATE_USER_PROFILE", { ssoId });
  //   return user;
  // }

  // async findAllIds(): Promise<string[]> {
  //   log("FIND_ALL_USERS_IDS");
  //   return this.userModel.find().distinct("_id");
  // }

  private async findBySsoId(ssoId: string): Promise<IUser | undefined> {
    log("FIND_USER_BY_SSO", { ssoId });
    return this.userModel.findOne({ ssoId: ssoId }).exec();
  }

  // async findPublicBySsoId(ssoId: string): Promise<IUserPublic | undefined> {
  //   log("FIND_PUBLIC_USER_BY_SSO", { ssoId });
  //   const user = await this.userModel.findOne({ ssoId: ssoId }).exec();
  //   const publicUser = userToPublic(user);

  //   return publicUser;
  // }

  // private async findById(id: string): Promise<IUser | undefined> {
  //   log("FIND_USER_BY_ID", { id });

  //   // Check if passed id is a valid Mongo ObjectId
  //   if (!id.match(/^[0-9a-fA-F]{24}$/)) {
  //     throw new HttpException("Invalid passed user id", HttpStatus.BAD_REQUEST);
  //   }

  //   return this.userModel.findById(id).exec();
  // }

  // private async findAll(filter = {}): Promise<IUser[]> {
  //   log("FIND_ALL_USERS");

  //   return this.userModel.find(filter).exec();
  // }
}
