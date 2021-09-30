import { AuthenticationService } from "../authentication/authentication.service";
import { Repository } from "typeorm";
import { User } from "./user.entity";
export declare class UsersService {
    private readonly usersRepository;
    private authenticationService;
    constructor(usersRepository: Repository<User>, authenticationService: AuthenticationService);
    insertUser(token: string): Promise<User>;
    private findBySsoId;
}
