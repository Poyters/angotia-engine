"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCopy = void 0;
/**
 * Does deep copy of passed item using JSON parsing.
 *
 * ### Example
 * ```js
 * deepCopy({a: "b"})
 * // => {a: "b"}
 * ```
 *
 * @param item - Any TS type or object containing primitive types
 * @returns Copy without reference
 */
var deepCopy = function (item) { return JSON.parse(JSON.stringify(item)); };
exports.deepCopy = deepCopy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcENvcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZGVlcENvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7O0dBV0c7QUFDSSxJQUFNLFFBQVEsR0FBRyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO0FBQXBELFFBQUEsUUFBUSxZQUE0QyJ9