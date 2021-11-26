import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthenticationService } from "../authentication/authentication.service";
import { logger } from "../../scripts/utils/logger";
import { Repository } from "typeorm";
import { Character } from "./character.entity";
import { UserService } from "components/user/user.service";
import { userConfig, Position } from "angotia-sdk";
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

    if (userChars?.length >= userConfig.characters.quantity.max) {
      throw new HttpException(
        "The user reached maximum quantity of characters",
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const existingChar = await this.findByNick(newCharacterDto.nick, true);

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

    if (!newCharacterDto?.sprite) {
      const defaultSprite =
        userConfig.characters.sprite.default[newCharacterDto.gender];
      newCharacter.sprite = defaultSprite;
    }

    await this.characterRepository.save(newCharacter);

    logger.write("FINISHED_INSERTING_CHAR", { ssoId, newCharacterDto });

    return newCharacter;
  }

  /* 
    Plain property protects before returning HTTP exception
    plain = true -> without HTTP Exception
  */
  async findByNick(nick: string, plain?: boolean): Promise<Character> {
    logger.write("FIND_USER_BY_SSO", { nick });
    const char = await this.characterRepository.findOne({ nick });

    if (!char && !plain) {
      throw new HttpException("Character not found", HttpStatus.NOT_FOUND);
    }

    return char;
  }

  async getPosition(id: string): Promise<Position> {
    logger.write("GET_CHAR_POSITION", { id });
    const char = await this.findById(id);

    return char.position;
  }

  private async findById(id: string): Promise<Character> {
    logger.write("FIND_CHAR_BY_ID", { id });
    const char = await this.characterRepository.findOne(id);

    if (!char) {
      throw new HttpException("Character not found", HttpStatus.NOT_FOUND);
    }

    return char;
  }
}
