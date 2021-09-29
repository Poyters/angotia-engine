"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = exports.AuthenticationError = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = __importDefault(require("node-fetch"));
const log_1 = require("../../scripts/utils/log");
class AuthenticationError extends Error {
}
exports.AuthenticationError = AuthenticationError;
let AuthenticationService = class AuthenticationService {
    async authenticate(token) {
        var _a;
        (0, log_1.log)("AUTHENTICATE_BY_TOKEN");
        const url = `${process.env.SSO_URL}/realms/${process.env.SSO_REALM}/protocol/openid-connect/userinfo`;
        try {
            const response = await (0, node_fetch_1.default)(url, {
                headers: {
                    authorization: token
                }
            });
            const reponseJson = (await response.json());
            return (_a = reponseJson === null || reponseJson === void 0 ? void 0 : reponseJson.sub) !== null && _a !== void 0 ? _a : null;
        }
        catch (e) {
            throw new AuthenticationError(e.message);
        }
    }
};
AuthenticationService = __decorate([
    (0, common_1.Injectable)()
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map