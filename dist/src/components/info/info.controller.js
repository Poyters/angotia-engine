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
exports.InfoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const info_service_1 = require("./info.service");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const swagger_1 = require("@nestjs/swagger");
let InfoController = class InfoController {
    constructor(infoService) {
        this.infoService = infoService;
    }
    check(res) {
        return res.status(200).send("OK");
    }
    appData() {
        return this.infoService.appInfo();
    }
};
__decorate([
    (0, common_1.Get)("check"),
    (0, nest_keycloak_connect_1.Unprotected)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], InfoController.prototype, "check", null);
__decorate([
    (0, common_1.Get)("app"),
    (0, nest_keycloak_connect_1.Unprotected)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], InfoController.prototype, "appData", null);
InfoController = __decorate([
    (0, swagger_1.ApiTags)("info"),
    (0, common_1.Controller)("info"),
    __metadata("design:paramtypes", [info_service_1.InfoService])
], InfoController);
exports.InfoController = InfoController;
//# sourceMappingURL=info.controller.js.map