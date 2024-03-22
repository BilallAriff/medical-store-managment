import { IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  profile_pic?: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  social_security_number: string;

  driving_license_number?: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  primary_contact: string;

  secondary_contact?: string;

  @IsNotEmpty()
  primary_address: string;

  secondary_address?: string;
}
