import { Gender, NewCharacter } from "angotia-sdk";

export class NewCharacterDto implements NewCharacter {
  nick: string;
  gender: Gender;
  sprite?: string;
}
