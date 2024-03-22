import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/Schema/user.schema";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    password: string
  ): Promise<{ access_token: string } | { error: string }> {
    const user: any = await this.usersService.findUserByEmail(email);

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException();
    }
    const payload = {
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.email,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(user: CreateUserDto): Promise<User | { error: string }> {
    const { password } = user;
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);
    const newUser = await this.usersService.createUser({
      ...user,
      password: hashedPassword,
    });
    console.log(newUser);
    return newUser;
  }
}
