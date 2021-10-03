import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthenticationService } from "../authentication/authentication.service";
import { log } from "../../scripts/utils/log";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { Character } from "components/character/character.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private authenticationService: AuthenticationService
  ) {}

  async insertUser(token: string): Promise<User> {
    log("START_INSERT_USER");

    if (!token) {
      throw new HttpException("No access token", HttpStatus.UNAUTHORIZED);
    }

    const ssoId = await this.authenticationService.authenticate(token);
    const existingUser = await this.findBySsoId(ssoId);

    if (existingUser) {
      throw new HttpException("User already exists", HttpStatus.CONFLICT);
    } else {
      const newUser = new User();
      newUser.ssoId = ssoId;
      newUser.created = Date.now();

      await this.userRepository.save(newUser);

      log("FINISH_INSERT_USER", { ssoId });

      return newUser;
    }
  }

  async getUser(token: string): Promise<User> {
    log("START_GET_USER");
    const ssoId = await this.authenticationService.authenticate(token);
    const user = await this.findBySsoId(ssoId);

    if (!user) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    log("FINISH_GET_USER", { ssoId });
    return user;
  }

  async getCharacters(token: string): Promise<Character[]> {
    log("GET_USER_CHARACTERS");
    const ssoId = await this.authenticationService.authenticate(token);
    const user = await this.findBySsoId(ssoId);

    if (!user) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    const userRelations = await this.userRepository.findOne({
      where: { ssoId: ssoId },
      relations: ["characters"]
    });

    const chars = userRelations?.characters;

    log("GOT_USER_CHARACTERS", { charsQuantity: chars?.length ?? 0 });
    return chars;
  }

  async getCharacter(token: string, charId: string): Promise<Character> {
    log("GET_USER_CHARACTER");
    const char = (await this.getCharacters(token))?.filter(
      char => char.id === charId
    )[0];

    if (!char) {
      throw new HttpException("Character not found", HttpStatus.NOT_FOUND);
    }

    log("GOT_USER_CHARACTER", { charId: char.id });
    return char;
  }

  async findAllIds(): Promise<string[]> {
    log("FIND_ALL_USERS_IDS");

    const objectIds = await this.userRepository.find({ select: ["id"] });
    return objectIds.map(objectId => Object.values(objectId)).flat();
  }

  async findBySsoId(ssoId: string): Promise<User | undefined> {
    log("FIND_USER_BY_SSO", { ssoId });

    return this.userRepository.findOne({ ssoId: ssoId });
  }
}
