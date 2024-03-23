import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Category } from "src/category/schema/category.schema";

@Schema()
export class SubCategory extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({ type: "ObjectId", ref: "Category", required: true })
  category: Category;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);
