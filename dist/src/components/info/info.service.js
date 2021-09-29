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
exports.InfoService = void 0;
const common_1 = require("@nestjs/common");
const package_json_1 = __importDefault(require("../../../package.json"));
const os_1 = __importDefault(require("os"));
const machineStartedTime = new Date();
let InfoService = class InfoService {
    appInfo() {
        return {
            version: this.appVersion,
            nodeVersion: this.nodeVersion,
            CPUs: os_1.default.cpus().length,
            totalMemeory: os_1.default.totalmem(),
            freeMemory: os_1.default.freemem(),
            cpuUsage: process.cpuUsage(),
            environment: this.env,
            machineStartedTime,
            currentMachineTime: new Date()
        };
    }
    get env() {
        return process.env.NODE_ENV;
    }
    get appVersion() {
        return package_json_1.default === null || package_json_1.default === void 0 ? void 0 : package_json_1.default.version;
    }
    get nodeVersion() {
        return process === null || process === void 0 ? void 0 : process.version;
    }
};
InfoService = __decorate([
    (0, common_1.Injectable)()
], InfoService);
exports.InfoService = InfoService;
//# sourceMappingURL=info.service.js.map