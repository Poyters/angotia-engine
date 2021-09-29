"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidUserProfile_1 = require("./isValidUserProfile");
const accountType_model_1 = require("../../models/accountType.model");
describe("isValidUserProfile test suite", () => {
    const invalidProfile1 = {
        firstName: "aa",
        lastName: null
    };
    const invalidProfile2 = {
        firstName: undefined,
        lastName: null
    };
    const invalidProfile3 = {};
    const validProfile = {
        firstName: "Rafał",
        lastName: "Kostecki"
    };
    test("is a function", () => {
        expect(typeof isValidUserProfile_1.isValidUserProfile).toEqual("function");
    });
    test("invalid profile1", () => {
        expect(isValidUserProfile_1.isValidUserProfile(invalidProfile1, accountType_model_1.AccountType.tenant)).toBe(false);
    });
    test("invalid profile2", () => {
        expect(isValidUserProfile_1.isValidUserProfile(invalidProfile2, accountType_model_1.AccountType.tenant)).toBe(false);
    });
    test("invalid profile3", () => {
        expect(isValidUserProfile_1.isValidUserProfile(invalidProfile3, accountType_model_1.AccountType.tenant)).toBe(false);
    });
    test("valid profile 1", () => {
        expect(isValidUserProfile_1.isValidUserProfile(validProfile, accountType_model_1.AccountType.tenant)).toBe(true);
    });
});
//# sourceMappingURL=isValidUserProfile.test%20copy.js.map