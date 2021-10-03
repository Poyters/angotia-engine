import { Controller, Post, Headers, Body, Param, Get } from "@nestjs/common";
import { CharacterService } from "./character.service";
import { Roles, Unprotected } from "nest-keycloak-connect";
import { ApiTags } from "@nestjs/swagger";
import { NewCharacterDto } from "./newCharacter.dto";

@ApiTags("character")
@Controller("character")
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post("create")
  @Roles({ roles: ["user"] })
  async createCharacter(
    @Headers("Authorization") token: string,
    @Body() newCharDto: NewCharacterDto
  ) {
    return this.characterService.createCharacter(token, newCharDto);
  }

  @Get("nick/:nick")
  @Unprotected()
  async getByNick(@Param("nick") nick: string) {
    return this.characterService.findByNick(nick);
  }
}
