"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewUser = void 0;
const createNewUser = (ssoId, firstName, lastName) => ({
    ssoId,
    created: Date.now(),
    profile: {
        firstName,
        lastName,
        description: "",
        avatar: null,
        backgroundPicture: null,
        companyName: null,
        phone: null,
        gender: null,
        age: null,
        pet: {
            types: [],
            description: null
        },
        keywords: []
    }
});
exports.createNewUser = createNewUser;
//# sourceMappingURL=createNewUser.js.map