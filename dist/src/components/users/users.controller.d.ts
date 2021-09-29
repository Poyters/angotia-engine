import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(token: string, newUserDTO: string): Promise<import("./user.model").IUser>;
}
