import { Prop } from "@nestjs/mongoose";

export class CreateSideEffectDto {
  @Prop({ required: true })
  name: string;
}
