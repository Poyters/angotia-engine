import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  created: number;

  @Column()
  ssoId: string;

  @BeforeInsert() genarate() {
    this.id = uuid();
  }
}
