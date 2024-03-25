import { IsNotEmpty } from "class-validator";
import { Category } from "src/category/schema/category.schema";
import { SideEffects } from "src/side_effects/schema/sideEffects.schema";
import { SubCategory } from "src/sub_category/schema/subCategory.schema";

export class UpdateProductDto {
  @IsNotEmpty()
  id: string | number;

  picture?: string;

  name?: string;

  description?: string;

  category?: Category[];

  subCategories?: SubCategory[];

  sideEffects?: SideEffects[];

  prescriptionRequired?: boolean;
}
