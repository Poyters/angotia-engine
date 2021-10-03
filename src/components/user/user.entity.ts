import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Character } from "components/character/character.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  created: number;

  @Column()
  ssoId: string;

  @OneToMany(
    () => Character,
    character => character.user
  )
  characters: Character[];

  @BeforeInsert() genarate() {
    this.id = uuid();
  }
}
