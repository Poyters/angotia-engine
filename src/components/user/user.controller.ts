import { Controller, Post, Get, Headers } from "@nestjs/common";
import { UserService } from "./user.service";
import { Roles, Unprotected } from "nest-keycloak-connect";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("user")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create")
  @Roles({ roles: ["user"] })
  async addUser(@Headers("Authorization") token: string) {
    return await this.userService.insertUser(token);
  }

  // Returns all data of user that made request
  @Get("profile")
  @Roles({ roles: ["user"] })
  async getUser(@Headers("Authorization") token: string) {
    return await this.userService.getUser(token);
  }

  @Get("ids")
  @Unprotected()
  async allIds() {
    return await this.userService.findAllIds();
  }
}
