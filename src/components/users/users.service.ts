import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IUser } from "interfaces/user.interface";
import { AuthenticationService } from "../authentication/authentication.service";
import { log } from "../../scripts/utils/log";
import { createNewUser } from "scripts/user/createNewUser";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
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
      console.log("newUser", newUser);
      await this.usersRepository.save(newUser);

      log("FINISH_INSERT_USER", { ssoId });

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

  // async findAllIds(): Promise<string[]> {
  //   log("FIND_ALL_USERS_IDS");
  //   return this.usersRepository.find({ select: ["id"] });
  // }

  private async findBySsoId(ssoId: string): Promise<User | undefined> {
    log("FIND_USER_BY_SSO", { ssoId });
    return this.usersRepository.findOne({ ssoId: ssoId });
  }
}
