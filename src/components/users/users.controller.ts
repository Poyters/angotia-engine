import { Controller, Post, Get, Headers, Body, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Roles, Unprotected } from "nest-keycloak-connect";
import { IUserProfile, INewUserDTO } from "../../interfaces/user.interface";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  @Roles({ roles: ["user"] })
  async addUser(
    @Headers("Authorization") token: string,
    @Body() newUserDTO: string
  ) {
    const newUserDTOJson = JSON.parse(newUserDTO) as INewUserDTO;
    const { accountType, firstName, lastName } = newUserDTOJson;

    return await this.usersService.insertUser(
      token,
      accountType,
      firstName,
      lastName
    );
  }

  // Returns all data of user that made request
  // @Get("profile")
  // @Roles({ roles: ["user"] })
  // async getUser(@Headers("Authorization") token: string) {
  //   return await this.usersService.getUser(token);
  // }

  // @Post("update-profile")
  // @Roles({ roles: ["user"] })
  // async updateProfile(
  //   @Headers("Authorization") token: string,
  //   @Body() profileDTO: string
  // ) {
  //   const profileData = JSON.parse(profileDTO) as IUserProfile;
  //   return await this.usersService.updateProfile(token, profileData);
  // }

  // @Get("public-data/:id")
  // @Unprotected()
  // async publicData(@Param("id") id: string) {
  //   return await this.usersService.getPublicData(id);
  // }

  // @Get("public-data")
  // @Unprotected()
  // async allPublicData() {
  //   return await this.usersService.getAllPublicData();
  // }

  // @Get("ids")
  // @Unprotected()
  // async allIds() {
  //   return await this.usersService.findAllIds();
  // }
}
