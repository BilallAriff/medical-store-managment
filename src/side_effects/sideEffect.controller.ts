import { Body, Controller, Get, Post } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { SideEffectsService } from "./sideEffect.service";
import { CreateSideEffectDto } from "./dto/createSideEffect.dto";
import { SideEffects } from "./schema/sideEffects.schema";
import { UpdateSideEffectDto } from "./dto/updateSideEffect.dto";

@Controller("side-effects")
export class SideEffectController {
  constructor(private sideEffectsService: SideEffectsService) {}

  @Post("create-side-effect")
  async createSideEffect(
    @Body() sideEffect: CreateSideEffectDto
  ): Promise<SideEffects> {
    return await this.sideEffectsService.createSideEffect({ ...sideEffect });
  }

  @Get("get-all-side-effects")
  async getAllSideEffects(): Promise<SideEffects[]> {
    return await this.sideEffectsService.getAllSideEffects();
  }

  @Post("update-side-effect-by-id")
  async updateSideEffectById(
    @Body() updatedSideEffect: UpdateSideEffectDto
  ): Promise<SideEffects> {
    return await this.sideEffectsService.updateSideEffectById(
      updatedSideEffect
    );
  }

  @Post("delete-side-effect-by-id")
  async deleteSideEffectById(
    @Body() { id }: { id: ObjectId }
  ): Promise<SideEffects> {
    return await this.sideEffectsService.deleteSideEffectById(id);
  }
}
