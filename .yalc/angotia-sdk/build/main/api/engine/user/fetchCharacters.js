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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCharacters = void 0;
var logger_1 = require("../../../config/logger");
var config_1 = require("../config");
var axios_1 = __importDefault(require("axios"));
/**
 * Fetch all characters assigned to passed user (token)
 *
 * ### Example
 * ```js
 * fetchCharacters("token")
 * // => [null, Character[]]
 * ```
 *
 * @param token - Token provided by SSO
 * @returns Tuple of [Error, Character[]]
 */
var fetchCharacters = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var response, responseData, error_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                logger_1.logger.write("FETCH_USER_CHARACTERS");
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, axios_1.default)(config_1.engineApiUrl + "/user/characters", {
                        method: "GET",
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    })];
            case 2:
                response = _c.sent();
                responseData = response.data;
                logger_1.logger.write("FETCHED_USER_CHARACTERS", { responseData: responseData });
                return [2 /*return*/, [null, responseData]];
            case 3:
                error_1 = _c.sent();
                logger_1.logger.write("FETCH_USER_CHARACTERS_ERR", {
                    error: (_b = (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.statusCode
                });
                return [2 /*return*/, [error_1.response.data, null]];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.fetchCharacters = fetchCharacters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hDaGFyYWN0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9lbmdpbmUvdXNlci9mZXRjaENoYXJhY3RlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaURBQWdEO0FBRWhELG9DQUF5QztBQUN6QyxnREFBMEI7QUFFMUI7Ozs7Ozs7Ozs7O0dBV0c7QUFDSSxJQUFNLGVBQWUsR0FBRyxVQUM3QixLQUFhOzs7Ozs7Z0JBRWIsZUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOzs7O2dCQUduQixxQkFBTSxJQUFBLGVBQUssRUFBSSxxQkFBWSxxQkFBa0IsRUFBRTt3QkFDOUQsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsT0FBTyxFQUFFOzRCQUNQLGFBQWEsRUFBRSxZQUFVLEtBQU87eUJBQ2pDO3FCQUNGLENBQUMsRUFBQTs7Z0JBTEksUUFBUSxHQUFHLFNBS2Y7Z0JBRUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBRW5DLGVBQU0sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDLENBQUM7Z0JBRTFELHNCQUFPLENBQUMsSUFBSSxFQUFFLFlBQTJCLENBQUMsRUFBQzs7O2dCQUUzQyxlQUFNLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFO29CQUN4QyxLQUFLLEVBQUUsTUFBQSxNQUFBLE9BQUssYUFBTCxPQUFLLHVCQUFMLE9BQUssQ0FBRSxRQUFRLDBDQUFFLElBQUksMENBQUUsVUFBVTtpQkFDekMsQ0FBQyxDQUFDO2dCQUNILHNCQUFPLENBQUMsT0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUM7Ozs7S0FFL0MsQ0FBQztBQXhCVyxRQUFBLGVBQWUsbUJBd0IxQiJ9