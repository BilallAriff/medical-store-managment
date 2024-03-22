import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/Schema/user.schema";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(email: string, password: string): Promise<{
        access_token: string;
    } | {
        error: string;
    }>;
    signUp(user: CreateUserDto): Promise<User | {
        error: string;
    }>;
}
