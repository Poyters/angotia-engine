import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  ManyToOne
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Gender } from "models/gender.model";
import { User } from "components/user/user.entity";

@Entity("character")
export class Character {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  created: number;

  @Column({ default: 0 })
  timeSpent: number;

  @Column()
  gender: Gender;

  @Column()
  nick: string;

  @Column({ default: 1 })
  level: number;

  @ManyToOne(
    () => User,
    user => user.characters
  )
  user: User;

  @BeforeInsert() genarate() {
    this.id = uuid();
  }
}
