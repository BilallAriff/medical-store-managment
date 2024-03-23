import { IsNotEmpty } from "class-validator";

export class UpdateSideEffectDto {
  @IsNotEmpty()
  id: string | number;

  name?: string;
}
