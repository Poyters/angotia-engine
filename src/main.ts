require("dotenv").config();
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { logger } from "./scripts/utils/logger";
import appConfig from "./configs/app.config.json";
import pckg from "../package.json";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import helmet from "fastify-helmet";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // Add middlewares
  app.enableCors();
  app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, "data:", "validator.swagger.io"],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`]
      }
    }
  });

  const config = new DocumentBuilder()
    .setTitle("Angotia Engine API")
    .setVersion(pckg.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(appConfig.port, appConfig.hostname);

  logger.write("APP_STARTED", {
    version: pckg.version,
    port: appConfig.port,
    hostname: appConfig.hostname
  });
}

bootstrap();
