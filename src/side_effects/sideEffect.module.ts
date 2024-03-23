import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SideEffects, SideEffectsSchema } from "./schema/sideEffects.schema";
import { SideEffectController } from "./sideEffect.controller";
import { SideEffectsService } from "./sideEffect.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SideEffects.name, schema: SideEffectsSchema },
    ]),
  ],
  controllers: [SideEffectController],
  providers: [SideEffectsService],
})
export class SideEffectModule {}
