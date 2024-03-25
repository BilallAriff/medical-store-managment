import { Category } from "src/category/schema/category.schema";
import { SideEffects } from "src/side_effects/schema/sideEffects.schema";
import { SubCategory } from "src/sub_category/schema/subCategory.schema";
export declare class CreateProductDto {
    picture?: string;
    name: string;
    description?: string;
    category: Category[];
    subCategories: SubCategory[];
    sideEffects?: SideEffects[];
    prescriptionRequired?: boolean;
}
