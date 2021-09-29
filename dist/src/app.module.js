"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("@nestjs/core");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const throttler_1 = require("@nestjs/throttler");
const info_module_1 = require("./components/info/info.module");
const users_module_1 = require("./components/users/users.module");
const info_service_1 = require("./components/info/info.service");
const authentication_service_1 = require("./components/authentication/authentication.service");
const authentication_module_1 = require("./components/authentication/authentication.module");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const offers_module_1 = require("./components/offers/offers.module");
const accessString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.8pk4f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(accessString),
            nest_keycloak_connect_1.KeycloakConnectModule.register({
                authServerUrl: process.env.SSO_URL,
                realm: process.env.SSO_REALM,
                clientId: process.env.SSO_CLIENT_ID,
                secret: process.env.SSO_SECRET
            }),
            throttler_1.ThrottlerModule.forRoot({
                ttl: 60,
                limit: 10
            }),
            info_module_1.InfoModule,
            authentication_module_1.AuthenticationModule,
            users_module_1.UsersModule,
            offers_module_1.OffersModule,
            nestjs_prometheus_1.PrometheusModule.register()
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: nest_keycloak_connect_1.AuthGuard
            },
            {
                provide: core_1.APP_GUARD,
                useClass: nest_keycloak_connect_1.ResourceGuard
            },
            {
                provide: core_1.APP_GUARD,
                useClass: nest_keycloak_connect_1.RoleGuard
            },
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard
            },
            info_service_1.InfoService,
            authentication_service_1.AuthenticationService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map