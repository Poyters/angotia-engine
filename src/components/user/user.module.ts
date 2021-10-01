import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserController } from "./user.controller";
import { AuthenticationModule } from "../authentication/authentication.module";

@Module({
  imports: [AuthenticationModule, TypeOrmModule.forFeature([User])],
  providers: [UserService],
  exports: [UserService, TypeOrmModule],
  controllers: [UserController]
})
export class UserModule {}
