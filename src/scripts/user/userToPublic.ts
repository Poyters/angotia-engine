import { IUser } from "components/users/user.model";
import { IUserPublic } from "interfaces/user.interface";
import { deepCopy } from "../utils/deepCopy";

export const userToPublic = (user: IUser) => {
  const copyOfUser = deepCopy(user) as IUser;

  // Make sure to always returns _id
  if (copyOfUser.id && !copyOfUser._id) {
    copyOfUser._id = copyOfUser.id;
    delete copyOfUser.id;
  }

  delete copyOfUser.ssoId;
  delete copyOfUser.created;

  return copyOfUser as IUserPublic;
};
