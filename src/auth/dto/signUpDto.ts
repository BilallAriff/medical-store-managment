import { Equals, IsEmail, IsNotEmpty, isNotEmpty } from "class-validator";

export class SignUpDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  //   @IsNotEmpty()
  //   @Equals("password")
  //   confirmPassword: string;
}
