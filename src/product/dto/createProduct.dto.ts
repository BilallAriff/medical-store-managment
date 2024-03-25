import { IsNotEmpty } from "class-validator";
import { Category } from "src/category/schema/category.schema";
import { SideEffects } from "src/side_effects/schema/sideEffects.schema";
import { SubCategory } from "src/sub_category/schema/subCategory.schema";

export class CreateProductDto {
  picture?: string;

  @IsNotEmpty()
  name: string;

  description?: string;

  @IsNotEmpty()
  category: Category[];

  @IsNotEmpty()
  subCategories: SubCategory[];

  sideEffects?: SideEffects[];

  prescriptionRequired?: boolean;
}
