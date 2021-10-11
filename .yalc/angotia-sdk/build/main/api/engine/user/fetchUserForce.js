"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserForce = void 0;
var fetchUser_1 = require("./fetchUser");
var createUser_1 = require("./createUser");
var logger_1 = require("../../../config/logger");
/**
 * Fetch user data. After failure trying to create user based on the same token
 *
 * ### Example
 * ```js
 * fetchUserForce("token")
 * // => [null, User]
 * ```
 *
 * @param token - Token provided by SSO
 * @returns Tuple of [Error, User]
 */
var fetchUserForce = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, fetchError, fetchedUser, error_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                logger_1.logger.write("FORCE_FETCHING_ANGOTIA_USER");
                return [4 /*yield*/, (0, fetchUser_1.fetchUser)(token)];
            case 1:
                _a = _c.sent(), fetchError = _a[0], fetchedUser = _a[1];
                logger_1.logger.write("FORCE_FETCHED_ANGOTIA_USER", {
                    userId: (_b = fetchedUser === null || fetchedUser === void 0 ? void 0 : fetchedUser.id) !== null && _b !== void 0 ? _b : null,
                    fetchError: fetchError
                });
                if (!fetchError) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, createUser_1.createUser)(token)];
            case 2: return [2 /*return*/, _c.sent()];
            case 3: return [2 /*return*/, [null, fetchedUser]];
            case 4:
                error_1 = _c.sent();
                logger_1.logger.write("FORCE_FETCHING_ANGOTIA_USER_ERROR", { error: error_1 });
                throw new Error(error_1);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.fetchUserForce = fetchUserForce;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hVc2VyRm9yY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2VuZ2luZS91c2VyL2ZldGNoVXNlckZvcmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUN4QywyQ0FBMEM7QUFFMUMsaURBQWdEO0FBR2hEOzs7Ozs7Ozs7OztHQVdHO0FBQ0ksSUFBTSxjQUFjLEdBQUcsVUFBTyxLQUFhOzs7Ozs7O2dCQUU5QyxlQUFNLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBRVYscUJBQU0sSUFBQSxxQkFBUyxFQUFDLEtBQUssQ0FBQyxFQUFBOztnQkFBbEQsS0FBNEIsU0FBc0IsRUFBakQsVUFBVSxRQUFBLEVBQUUsV0FBVyxRQUFBO2dCQUU5QixlQUFNLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFO29CQUN6QyxNQUFNLEVBQUUsTUFBQSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsRUFBRSxtQ0FBSSxJQUFJO29CQUMvQixVQUFVLFlBQUE7aUJBQ1gsQ0FBQyxDQUFDO3FCQUVDLFVBQVUsRUFBVix3QkFBVTtnQkFDTCxxQkFBTSxJQUFBLHVCQUFVLEVBQUMsS0FBSyxDQUFDLEVBQUE7b0JBQTlCLHNCQUFPLFNBQXVCLEVBQUM7b0JBR2pDLHNCQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFDOzs7Z0JBRTNCLGVBQU0sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxLQUFLLFNBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQzdELE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUM7Ozs7S0FFMUIsQ0FBQztBQXBCVyxRQUFBLGNBQWMsa0JBb0J6QiJ9