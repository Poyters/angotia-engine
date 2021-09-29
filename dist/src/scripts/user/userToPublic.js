"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToPublic = void 0;
const user_model_1 = require("../../components/users/user.model");
const user_interface_1 = require("../../interfaces/user.interface");
const deepCopy_1 = require("../utils/deepCopy");
const userToPublic = (user) => {
    const copyOfUser = (0, deepCopy_1.deepCopy)(user);
    if (copyOfUser.id && !copyOfUser._id) {
        copyOfUser._id = copyOfUser.id;
        delete copyOfUser.id;
    }
    delete copyOfUser.ssoId;
    delete copyOfUser.created;
    return copyOfUser;
};
exports.userToPublic = userToPublic;
//# sourceMappingURL=userToPublic.js.map