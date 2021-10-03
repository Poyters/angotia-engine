import { Gender } from "models/gender.model";

export class NewCharacterDto {
  nick: string;
  gender: Gender;
  sprite?: string;
}
