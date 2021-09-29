import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./user.model";
import { UsersController } from "./users.controller";
import { AuthenticationModule } from "../authentication/authentication.module";

@Module({
  imports: [
    AuthenticationModule,
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }])
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
