"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
const log_1 = require("./scripts/utils/log");
const app_config_json_1 = __importDefault(require("./configs/app.config.json"));
const package_json_1 = __importDefault(require("../package.json"));
const swagger_1 = require("@nestjs/swagger");
const fastify_helmet_1 = __importDefault(require("fastify-helmet"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.enableCors();
    app.register(fastify_helmet_1.default, {
        contentSecurityPolicy: {
            directives: {
                defaultSrc: [`'self'`],
                styleSrc: [`'self'`, `'unsafe-inline'`],
                imgSrc: [`'self'`, "data:", "validator.swagger.io"],
                scriptSrc: [`'self'`, `https: 'unsafe-inline'`]
            }
        }
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Angotia Engine API")
        .setVersion(package_json_1.default.version)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(app_config_json_1.default.port, app_config_json_1.default.hostname);
    (0, log_1.log)("APP_STARTED", {
        version: package_json_1.default.version,
        port: app_config_json_1.default.port,
        hostname: app_config_json_1.default.hostname
    });
}
bootstrap();
//# sourceMappingURL=main.js.map