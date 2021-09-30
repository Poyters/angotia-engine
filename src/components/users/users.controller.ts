import { Controller, Post, Get, Headers } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Roles, Unprotected } from "nest-keycloak-connect";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  @Roles({ roles: ["user"] })
  async addUser(@Headers("Authorization") token: string) {
    return await this.usersService.insertUser(token);
  }

  // Returns all data of user that made request
  @Get("profile")
  @Roles({ roles: ["user"] })
  async getUser(@Headers("Authorization") token: string) {
    return await this.usersService.getUser(token);
  }

  @Get("ids")
  @Unprotected()
  async allIds() {
    return await this.usersService.findAllIds();
  }
}
