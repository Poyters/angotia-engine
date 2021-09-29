"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deepCopy_1 = require("./deepCopy");
describe("deepCopy test suite", () => {
    const item = {
        nestedArray: ["0", 1, 2, [3, 4]]
    };
    const itemCopy = {
        nestedArray: ["0", 1, 2, [3, 4]]
    };
    test("deepCopy is a function", () => {
        expect(typeof deepCopy_1.deepCopy).toEqual("function");
    });
    test("copy item is the same", () => {
        expect((0, deepCopy_1.deepCopy)(item)).toEqual(itemCopy);
    });
    test("copy item has no reference", () => {
        expect((0, deepCopy_1.deepCopy)(item) === itemCopy).toBe(false);
    });
});
//# sourceMappingURL=deepCopy.test.js.map