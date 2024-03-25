import { ObjectId } from "mongoose";
import { SideEffectsService } from "./sideEffect.service";
import { CreateSideEffectDto } from "./dto/createSideEffect.dto";
import { SideEffects } from "./schema/sideEffects.schema";
import { UpdateSideEffectDto } from "./dto/updateSideEffect.dto";
export declare class SideEffectController {
    private sideEffectsService;
    constructor(sideEffectsService: SideEffectsService);
    createSideEffect(sideEffect: CreateSideEffectDto): Promise<SideEffects>;
    getAllSideEffects(): Promise<SideEffects[]>;
    updateSideEffectById(updatedSideEffect: UpdateSideEffectDto): Promise<SideEffects>;
    deleteSideEffectById({ id }: {
        id: ObjectId;
    }): Promise<SideEffects>;
}
