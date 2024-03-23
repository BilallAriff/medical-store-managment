import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { SideEffects } from "./schema/sideEffects.schema";
import { CreateSideEffectDto } from "./dto/createSideEffect.dto";
import { UpdateSideEffectDto } from "./dto/updateSideEffect.dto";

@Injectable()
export class SideEffectsService {
  constructor(
    @InjectModel(SideEffects.name) private sideEffectsModel: Model<SideEffects>
  ) {}

  async createSideEffect(sideEffects: CreateSideEffectDto) {
    return await this.sideEffectsModel.create(sideEffects);
  }

  async getAllSideEffects(): Promise<SideEffects[]> {
    return await this.sideEffectsModel.find({
      isDeleted: false,
    });
  }

  async updateSideEffectById(updatedSideEffects: UpdateSideEffectDto) {
    return await this.sideEffectsModel.findByIdAndUpdate(
      { _id: updatedSideEffects?.id },
      updatedSideEffects,
      { new: true }
    );
  }

  async deleteSideEffectById(id: ObjectId) {
    return await this.sideEffectsModel.findByIdAndUpdate(
      { _id: id },
      { isDeleted: true },
      { new: true }
    );
  }
}
