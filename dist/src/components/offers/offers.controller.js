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
exports.OffersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const offers_service_1 = require("./offers.service");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const swagger_1 = require("@nestjs/swagger");
let OffersController = class OffersController {
    constructor(offersService) {
        this.offersService = offersService;
    }
    async allIds() {
        return await this.offersService.findAllIds();
    }
    async allSummaries() {
        return await this.offersService.findAllSummaries();
    }
    async getSummaryById(id) {
        return await this.offersService.getSummaryById(id);
    }
    async getById(id) {
        return await this.offersService.getById(id);
    }
    async addOffer(token, offerDTO) {
        const offerData = JSON.parse(offerDTO);
        return await this.offersService.create(token, offerData);
    }
};
__decorate([
    (0, common_1.Get)("ids"),
    (0, nest_keycloak_connect_1.Unprotected)(),
    openapi.ApiResponse({ status: 200, type: [String] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "allIds", null);
__decorate([
    (0, common_1.Get)("summaries"),
    (0, nest_keycloak_connect_1.Unprotected)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "allSummaries", null);
__decorate([
    (0, common_1.Get)("summaries/:id"),
    (0, nest_keycloak_connect_1.Unprotected)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "getSummaryById", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, nest_keycloak_connect_1.Unprotected)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)("create"),
    (0, nest_keycloak_connect_1.Roles)({ roles: ["user"] }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Headers)("Authorization")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "addOffer", null);
OffersController = __decorate([
    (0, swagger_1.ApiTags)("offers"),
    (0, common_1.Controller)("offers"),
    __metadata("design:paramtypes", [offers_service_1.OffersService])
], OffersController);
exports.OffersController = OffersController;
//# sourceMappingURL=offers.controller.js.map