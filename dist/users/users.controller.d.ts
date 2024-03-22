import { UsersService } from "./users.service";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAllUsers(): Promise<({
        userId: number;
        username: string;
        password: string;
        email?: undefined;
    } | {
        userId: number;
        email: string;
        username: string;
        password: string;
    })[]>;
}
