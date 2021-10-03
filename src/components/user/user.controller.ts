import { Controller, Post, Get, Headers, Param } from "@nestjs/common";
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

  @Get("characters")
  @Roles({ roles: ["user"] })
  async getCharacters(@Headers("Authorization") token: string) {
    return await this.userService.getCharacters(token);
  }

  @Get("character/:id")
  @Roles({ roles: ["user"] })
  async getCharacter(
    @Headers("Authorization") token: string,
    @Param("id") charId: string
  ) {
    return await this.userService.getCharacter(token, charId);
  }

  @Get("ids")
  @Unprotected()
  async allIds() {
    return await this.userService.findAllIds();
  }
}
