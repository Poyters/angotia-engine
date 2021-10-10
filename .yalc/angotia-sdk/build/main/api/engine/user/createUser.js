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
exports.createUser = void 0;
var logger_1 = require("../../../config/logger");
var node_fetch_1 = __importDefault(require("node-fetch"));
var createUser = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var response, responseBody, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                logger_1.logger.write("CREATING_ANGOTIA_USER");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, node_fetch_1.default)(process.env.NEXT_PUBLIC_ENGINE_URL + "/user/create", {
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                responseBody = _a.sent();
                logger_1.logger.write("CREATED_ANGOTIA_USER", { responseBody: responseBody });
                if (response.status !== 200 && response.status !== 201) {
                    return [2 /*return*/, [responseBody, null]];
                }
                return [2 /*return*/, [null, responseBody]];
            case 4:
                error_1 = _a.sent();
                logger_1.logger.write("CREATING_ANGOTIA_USER_ERROR", { error: error_1 });
                throw new Error(error_1);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvZW5naW5lL3VzZXIvY3JlYXRlVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpREFBZ0Q7QUFFaEQsMERBQStCO0FBRXhCLElBQU0sVUFBVSxHQUFHLFVBQU8sS0FBYTs7Ozs7Z0JBQzVDLGVBQU0sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7OztnQkFHbkIscUJBQU0sSUFBQSxvQkFBSyxFQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixpQkFBYyxFQUNuRDt3QkFDRSxNQUFNLEVBQUUsTUFBTTt3QkFDZCxPQUFPLEVBQUU7NEJBQ1AsYUFBYSxFQUFFLFlBQVUsS0FBTzt5QkFDakM7cUJBQ0YsQ0FDRixFQUFBOztnQkFSSyxRQUFRLEdBQUcsU0FRaEI7Z0JBRW9CLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQXBDLFlBQVksR0FBRyxTQUFxQjtnQkFFMUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUMsQ0FBQztnQkFFdkQsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtvQkFDdEQsc0JBQU8sQ0FBQyxZQUFxQixFQUFFLElBQUksQ0FBQyxFQUFDO2lCQUN0QztnQkFFRCxzQkFBTyxDQUFDLElBQUksRUFBRSxZQUFvQixDQUFDLEVBQUM7OztnQkFFcEMsZUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLEtBQUssU0FBQSxFQUFFLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFLLENBQUMsQ0FBQzs7OztLQUUxQixDQUFDO0FBM0JXLFFBQUEsVUFBVSxjQTJCckIifQ==