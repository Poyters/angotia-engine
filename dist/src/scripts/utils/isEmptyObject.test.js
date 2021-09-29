"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isEmptyObject_1 = require("./isEmptyObject");
describe("isEmptyObject test suite", () => {
    test("isEmptyObject is a function", () => {
        expect(typeof isEmptyObject_1.isEmptyObject).toEqual("function");
    });
    test("is empty 1", () => {
        expect((0, isEmptyObject_1.isEmptyObject)({})).toBe(true);
    });
    test("is empty 2", () => {
        expect((0, isEmptyObject_1.isEmptyObject)({
            x: []
        })).toBe(false);
    });
    test("is empty 3", () => {
        expect((0, isEmptyObject_1.isEmptyObject)([])).toBe(false);
    });
    test("is empty 4", () => {
        expect((0, isEmptyObject_1.isEmptyObject)("")).toBe(false);
    });
});
//# sourceMappingURL=isEmptyObject.test.js.map