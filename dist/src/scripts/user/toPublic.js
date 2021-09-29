"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToPublic = void 0;
const user_model_1 = require("../../components/users/user.model");
const user_interface_1 = require("../../interfaces/user.interface");
const deepCopy_1 = require("../utils/deepCopy");
exports.userToPublic = (user) => {
    const copyOfUser = deepCopy_1.deepCopy(user);
    delete copyOfUser.ssoId;
    return copyOfUser;
};
//# sourceMappingURL=toPublic.js.map