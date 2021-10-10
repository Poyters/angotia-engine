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
import { Gender, userConfig } from "angotia-sdk";
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
  sprite: string = userConfig.characters.defaultSprite;

  @Column()
  level: number = 1;

  @ManyToOne(
    () => User,
    user => user.characters
  )
  user: User;

  @BeforeInsert() genarate() {
    this.id = uuid();
  }
}
