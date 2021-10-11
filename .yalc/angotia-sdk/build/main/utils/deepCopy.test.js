"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepCopy_1 = require("./deepCopy");
describe("deepCopy test suite", function () {
    var item = {
        nestedArray: ["0", 1, 2, [3, 4]]
    };
    var itemCopy = {
        nestedArray: ["0", 1, 2, [3, 4]]
    };
    test("deepCopy is a function", function () {
        expect(typeof deepCopy_1.deepCopy).toEqual("function");
    });
    test("copy item is the same", function () {
        expect((0, deepCopy_1.deepCopy)(item)).toEqual(itemCopy);
    });
    test("copy item has no reference", function () {
        expect((0, deepCopy_1.deepCopy)(item) === itemCopy).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcENvcHkudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9kZWVwQ29weS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXNDO0FBRXRDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUM5QixJQUFNLElBQUksR0FBRztRQUNYLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2pDLENBQUM7SUFFRixJQUFNLFFBQVEsR0FBRztRQUNmLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2pDLENBQUM7SUFFRixJQUFJLENBQUMsd0JBQXdCLEVBQUU7UUFDN0IsTUFBTSxDQUFDLE9BQU8sbUJBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyx1QkFBdUIsRUFBRTtRQUM1QixNQUFNLENBQUMsSUFBQSxtQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLDRCQUE0QixFQUFFO1FBQ2pDLE1BQU0sQ0FBQyxJQUFBLG1CQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==