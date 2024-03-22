import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { Public } from "./authMetaData";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import { SignInDto } from "./dto/sign-in.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @Public()
  @Post("login")
  async signIn(@Body() user: SignInDto) {
    console.log(user);
    return this.authService.signIn(user.email, user.password);
  }

  @Public()
  @Post("signup")
  async singup(@Body() user: CreateUserDto) {
    const existingUser = await this.userService.findUserByEmail(user.email);
    if (existingUser) {
      console.log(existingUser);
      return { error: "Email already in use!" };
    }
    return this.authService.signUp(user);
  }
}
