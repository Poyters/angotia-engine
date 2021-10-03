import { Module } from "@nestjs/common";
import { CharacterService } from "./character.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Character } from "./character.entity";
import { CharacterController } from "./character.controller";
import { AuthenticationModule } from "components/authentication/authentication.module";
import { UserModule } from "components/user/user.module";

@Module({
  imports: [
    AuthenticationModule,
    TypeOrmModule.forFeature([Character]),
    UserModule
  ],
  providers: [CharacterService],
  exports: [CharacterService, TypeOrmModule],
  controllers: [CharacterController]
})
export class CharacterModule {}
