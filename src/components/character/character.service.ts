import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthenticationService } from "../authentication/authentication.service";
import { logger } from "../../scripts/utils/logger";
import { Repository } from "typeorm";
import { Character } from "./character.entity";
import { UserService } from "components/user/user.service";
import { userConfig } from "angotia-sdk";
import { NewCharacterDto } from "./newCharacter.dto";

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private readonly characterRepository: Repository<Character>,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {}

  async createCharacter(
    token: string,
    newCharacterDto: NewCharacterDto
  ): Promise<Character> {
    logger.write("START_INSERTING_CHAR");

    if (!token) {
      throw new HttpException("No access token", HttpStatus.UNAUTHORIZED);
    }

    const ssoId = await this.authenticationService.authenticate(token);
    const user = await this.userService.findBySsoId(ssoId);
    const userChars = await this.userService.getCharacters(token);

    if (userChars?.length >= userConfig.characters.max) {
      throw new HttpException(
        "The user reached maximum quantity of characters",
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const existingChar = await this.findByNick(newCharacterDto.nick);

    if (existingChar) {
      throw new HttpException(
        "Char with this nick already exists",
        HttpStatus.CONFLICT
      );
    }

    const newCharacter = new Character();
    newCharacter.created = Date.now();
    newCharacter.gender = newCharacterDto.gender;
    newCharacter.nick = newCharacterDto.nick;
    newCharacter.user = user;

    if (newCharacterDto?.sprite) newCharacter.sprite = newCharacterDto.sprite;

    await this.characterRepository.save(newCharacter);

    logger.write("FINISHED_INSERTING_CHAR", { ssoId });

    return newCharacter;
  }

  async findByNick(nick: string): Promise<Character | undefined> {
    logger.write("FIND_USER_BY_SSO", { nick });
    return this.characterRepository.findOne({ nick });
  }
}
