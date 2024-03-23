import { IsNotEmpty } from "class-validator";

export class UpdateCategoryDto {
  @IsNotEmpty()
  id: string | number;
  name?: string;
  description?: string;
  isDeleted?: boolean;
}
