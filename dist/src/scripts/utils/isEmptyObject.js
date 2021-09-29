"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = void 0;
const isEmptyObject = (obj) => {
    var _a;
    return ((_a = Object.keys(obj)) === null || _a === void 0 ? void 0 : _a.length) === 0 && (obj === null || obj === void 0 ? void 0 : obj.constructor) === Object;
};
exports.isEmptyObject = isEmptyObject;
//# sourceMappingURL=isEmptyObject.js.map