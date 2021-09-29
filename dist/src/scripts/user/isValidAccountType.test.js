"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidAccountType_1 = require("./isValidAccountType");
const accountType_model_1 = require("../../models/accountType.model");
describe("isValidUserProfile test suite", () => {
    test("is a function", () => {
        expect(typeof isValidAccountType_1.isValidAccountType).toEqual("function");
    });
    test("valid 1", () => {
        expect((0, isValidAccountType_1.isValidAccountType)(accountType_model_1.AccountType.tenant)).toBe(true);
    });
    test("valid 2", () => {
        expect((0, isValidAccountType_1.isValidAccountType)(accountType_model_1.AccountType.landlord)).toBe(true);
    });
});
//# sourceMappingURL=isValidAccountType.test.js.map