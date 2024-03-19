import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/signUpDto";
import { SignInDto } from "./dto/signInDto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signUp(@Body() req: SignUpDto) {
    return this.authService.signUp(req);
  }

  @Post("signin")
  signIn(@Body() req: SignInDto) {
    return this.authService.signIn(req);
  }
}
