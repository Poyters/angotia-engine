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
    const invalidProfile4 = {
        firstName: "Rafał",
        lastName: "Kostecki",
        age: [55],
        gender: "NON_BINARY",
        description: "hshsryhsrtysrys",
        avatar: "",
        backgroundPicture: "",
        companyName: "",
        phone: "",
        pet: {
            types: ["CAT", "DOG", "OTHER"],
            description: "jlfajofhlkaw;lfawgawg"
        },
        keywords: ["NO_SMOKING", "WORK", "STUDY", "CHILDLESS", "LGBT"]
    };
    const validProfile1 = {
        firstName: "Rafał",
        lastName: "Kostecki",
        descritption: ""
    };
    const validProfile2 = {
        firstName: "Rafał",
        lastName: "Kostecki",
        age: 41,
        gender: "NON_BINARY",
        description: "hshsryhsrtysrys",
        avatar: "",
        backgroundPicture: "",
        companyName: "",
        phone: "",
        pet: {
            types: ["CAT", "DOG", "OTHER"],
            description: "jlfajofhlkaw;lfawgawg"
        },
        keywords: ["NO_SMOKING", "WORK", "STUDY", "CHILDLESS", "LGBT"]
    };
    test("is a function", () => {
        expect(typeof isValidUserProfile_1.isValidUserProfile).toEqual("function");
    });
    test("invalid profile1", () => {
        expect((0, isValidUserProfile_1.isValidUserProfile)(invalidProfile1, accountType_model_1.AccountType.tenant)).toBe(false);
    });
    test("invalid profile2", () => {
        expect((0, isValidUserProfile_1.isValidUserProfile)(invalidProfile2, accountType_model_1.AccountType.tenant)).toBe(false);
    });
    test("invalid profile3", () => {
        expect((0, isValidUserProfile_1.isValidUserProfile)(invalidProfile3, accountType_model_1.AccountType.tenant)).toBe(false);
    });
    test("invalid profile4", () => {
        expect((0, isValidUserProfile_1.isValidUserProfile)(invalidProfile4, accountType_model_1.AccountType.tenant)).toBe(false);
    });
    test("valid profile 1", () => {
        expect((0, isValidUserProfile_1.isValidUserProfile)(validProfile1, accountType_model_1.AccountType.tenant)).toBe(true);
    });
    test("valid profile 2", () => {
        expect((0, isValidUserProfile_1.isValidUserProfile)(validProfile2, accountType_model_1.AccountType.tenant)).toBe(true);
    });
});
//# sourceMappingURL=isValidUserProfile.test.js.map