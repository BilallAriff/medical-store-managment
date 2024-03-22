import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import { SignInDto } from "./dto/sign-in.dto";
export declare class AuthController {
    private authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    signIn(user: SignInDto): Promise<{
        access_token: string;
    } | {
        error: string;
    }>;
    singup(user: CreateUserDto): Promise<import("../users/Schema/user.schema").User | {
        error: string;
    }>;
}
