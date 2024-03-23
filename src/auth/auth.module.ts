import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { jwtConstants } from "./constants";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    JwtModule.register({
      global: true,
      // secret: jwtConstants.secret,
      secret: "123!@#!@#",
      // signOptions: { expiresIn: process.env.JWT_EXPIRE },
      signOptions: { expiresIn: "1d" },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
