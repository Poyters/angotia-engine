import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { APP_GUARD } from "@nestjs/core";
import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard
} from "nest-keycloak-connect";
import { ThrottlerModule, ThrottlerGuard } from "@nestjs/throttler";
import { InfoModule } from "./components/info/info.module";
import { UsersModule } from "./components/users/users.module";
import { InfoService } from "./components/info/info.service";
import { AuthenticationService } from "./components/authentication/authentication.service";
import { AuthenticationModule } from "./components/authentication/authentication.module";
import { PrometheusModule } from "@willsoto/nestjs-prometheus";
import { OffersModule } from "./components/offers/offers.module";

const accessString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.8pk4f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

@Module({
  imports: [
    MongooseModule.forRoot(accessString),
    KeycloakConnectModule.register({
      authServerUrl: process.env.SSO_URL,
      realm: process.env.SSO_REALM,
      clientId: process.env.SSO_CLIENT_ID,
      secret: process.env.SSO_SECRET
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10
    }),
    InfoModule,
    AuthenticationModule,
    UsersModule,
    OffersModule,
    PrometheusModule.register()
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard
    },

    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    InfoService,
    AuthenticationService
  ]
})
export class AppModule {}
