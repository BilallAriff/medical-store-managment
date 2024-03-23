import { IsNotEmpty } from "class-validator";

export class UpdateSubCategoryDto {
  @IsNotEmpty()
  id: string | number;

  name?: string;

  description?: string;

  category?: string | number;
}
