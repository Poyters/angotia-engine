"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEmptyObject_1 = require("./isEmptyObject");
describe("isEmptyObject test suite", function () {
    test("isEmptyObject is a function", function () {
        expect(typeof isEmptyObject_1.isEmptyObject).toEqual("function");
    });
    test("is empty 1", function () {
        expect((0, isEmptyObject_1.isEmptyObject)({})).toBe(true);
    });
    test("is empty 2", function () {
        expect((0, isEmptyObject_1.isEmptyObject)({
            x: []
        })).toBe(false);
    });
    test("is empty 3", function () {
        expect((0, isEmptyObject_1.isEmptyObject)([])).toBe(false);
    });
    test("is empty 4", function () {
        expect((0, isEmptyObject_1.isEmptyObject)("")).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNFbXB0eU9iamVjdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2lzRW1wdHlPYmplY3QudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUVoRCxRQUFRLENBQUMsMEJBQTBCLEVBQUU7SUFDbkMsSUFBSSxDQUFDLDZCQUE2QixFQUFFO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLDZCQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE1BQU0sQ0FBQyxJQUFBLDZCQUFhLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE1BQU0sQ0FDSixJQUFBLDZCQUFhLEVBQUM7WUFDWixDQUFDLEVBQUUsRUFBRTtTQUNOLENBQUMsQ0FDSCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsTUFBTSxDQUFDLElBQUEsNkJBQWEsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsTUFBTSxDQUFDLElBQUEsNkJBQWEsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=