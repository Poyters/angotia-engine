"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createNewUser_1 = require("./createNewUser");
describe("createNewUser test suite", () => {
    const blankUser = (0, createNewUser_1.createNewUser)("ssoid");
    test("is a function", () => {
        expect(typeof createNewUser_1.createNewUser).toEqual("function");
    });
    test("blank user exists ssoId", () => {
        expect(blankUser.ssoId).toBe("ssoid");
    });
    test("blank user exists created", () => {
        expect(blankUser.created).not.toBe(null);
    });
});
//# sourceMappingURL=createNewUser.test.js.map