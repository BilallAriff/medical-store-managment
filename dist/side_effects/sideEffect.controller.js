"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideEffectController = void 0;
const common_1 = require("@nestjs/common");
const sideEffect_service_1 = require("./sideEffect.service");
const createSideEffect_dto_1 = require("./dto/createSideEffect.dto");
const updateSideEffect_dto_1 = require("./dto/updateSideEffect.dto");
let SideEffectController = class SideEffectController {
    constructor(sideEffectsService) {
        this.sideEffectsService = sideEffectsService;
    }
    async createSideEffect(sideEffect) {
        return await this.sideEffectsService.createSideEffect(Object.assign({}, sideEffect));
    }
    async getAllSideEffects() {
        return await this.sideEffectsService.getAllSideEffects();
    }
    async updateSideEffectById(updatedSideEffect) {
        return await this.sideEffectsService.updateSideEffectById(updatedSideEffect);
    }
    async deleteSideEffectById({ id }) {
        return await this.sideEffectsService.deleteSideEffectById(id);
    }
};
__decorate([
    (0, common_1.Post)("create-side-effect"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSideEffect_dto_1.CreateSideEffectDto]),
    __metadata("design:returntype", Promise)
], SideEffectController.prototype, "createSideEffect", null);
__decorate([
    (0, common_1.Get)("get-all-side-effects"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SideEffectController.prototype, "getAllSideEffects", null);
__decorate([
    (0, common_1.Post)("update-side-effect-by-id"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateSideEffect_dto_1.UpdateSideEffectDto]),
    __metadata("design:returntype", Promise)
], SideEffectController.prototype, "updateSideEffectById", null);
__decorate([
    (0, common_1.Post)("delete-side-effect-by-id"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SideEffectController.prototype, "deleteSideEffectById", null);
SideEffectController = __decorate([
    (0, common_1.Controller)("side-effects"),
    __metadata("design:paramtypes", [sideEffect_service_1.SideEffectsService])
], SideEffectController);
exports.SideEffectController = SideEffectController;
//# sourceMappingURL=sideEffect.controller.js.map