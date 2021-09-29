"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlankUser = void 0;
exports.createBlankUser = (ssoId) => ({
    ssoId,
    created: Date.now(),
    profile: {
        description: "",
        avatar: null,
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
//# sourceMappingURL=createBlankUser.js.map