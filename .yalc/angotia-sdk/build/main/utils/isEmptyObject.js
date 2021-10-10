"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = void 0;
/**
 * Check if passed object is empty
 *
 * ### Example
 * ```js
 * isEmptyObject({})
 * // => true
 * ```
 *
 * @param object - Any JavaScript type
 * @returns if object is empty
 */
var isEmptyObject = function (object) {
    var _a;
    return ((_a = Object.keys(object)) === null || _a === void 0 ? void 0 : _a.length) === 0 && (object === null || object === void 0 ? void 0 : object.constructor) === Object;
};
exports.isEmptyObject = isEmptyObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNFbXB0eU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9pc0VtcHR5T2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7OztHQVdHO0FBQ0ksSUFBTSxhQUFhLEdBQUcsVUFBQyxNQUFNOztJQUNsQyxPQUFPLENBQUEsTUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywwQ0FBRSxNQUFNLE1BQUssQ0FBQyxJQUFJLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFdBQVcsTUFBSyxNQUFNLENBQUM7QUFDN0UsQ0FBQyxDQUFDO0FBRlcsUUFBQSxhQUFhLGlCQUV4QiJ9