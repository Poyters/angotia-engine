"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUserProfile = void 0;
const user_interface_1 = require("../../interfaces/user.interface");
const isValidAccountType_1 = require("scripts/user/isValidAccountType");
const accountType_model_1 = require("models/accountType.model");
const isValidUserProfile = (profile, accountType) => {
    if (!profile ||
        !(profile === null || profile === void 0 ? void 0 : profile.firstName) ||
        !(profile === null || profile === void 0 ? void 0 : profile.lastName) ||
        (profile === null || profile === void 0 ? void 0 : profile.description) === null) {
        return false;
    }
    if (!(0, isValidAccountType_1.isValidAccountType)(accountType)) {
        return false;
    }
    if (accountType === accountType_model_1.AccountType.tenant) {
        if ((profile === null || profile === void 0 ? void 0 : profile.age) && typeof profile.age !== "number") {
            return false;
        }
    }
    return true;
};
exports.isValidUserProfile = isValidUserProfile;
//# sourceMappingURL=isValidUserProfile.js.map