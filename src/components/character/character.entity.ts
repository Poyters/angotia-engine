/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  ManyToOne,
  Index
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Gender, Position, userConfig } from "angotia-sdk";
import { User } from "components/user/user.entity";

@Entity("character")
export class Character {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  created: number;

  @Column()
  timeSpent: number = 0;

  @Column()
  gender: Gender;

  @Index({ unique: true })
  @Column()
  nick: string;

  // Url to sprite on CDN
  @Column()
  sprite: string;

  @Column()
  level: number = 1;

  @Column({ type: "json" })
  position: Position = {
    mapId: userConfig.characters.position.default.mapId,
    x: userConfig.characters.position.default.x,
    y: userConfig.characters.position.default.y
  };

  @ManyToOne(
    () => User,
    user => user.characters
  )
  user: User;

  @BeforeInsert() genarate() {
    this.id = uuid();
  }
}
