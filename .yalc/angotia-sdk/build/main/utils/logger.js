"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var deepCopy_1 = require("../utils/deepCopy");
var isEmptyObject_1 = require("../utils/isEmptyObject");
var log_model_1 = require("../models/log.model");
/**
 * Constructs a new Logger to track what's goin on in your application
 *
 * ### Example deep copy
 * ```js
 * const config = {
 *   APP_STARTED: {
 *     message: "Application started"
 *   },
 * }
 * const logger = newLogger(config, true)
 * logger.write("APP_STARTED")
 * // => "10/5/2021, 3:35:59 PM | INFO | Application started"
 * ```
 */
var Logger = /** @class */ (function () {
    function Logger(config, isEnabled) {
        var _this = this;
        this.write = function (logId, additionalData) {
            var _a, _b, _c, _d, _e, _f;
            if (additionalData === void 0) { additionalData = {}; }
            if (!_this.isEnabled)
                return;
            var logMessage = (_b = (_a = _this.config) === null || _a === void 0 ? void 0 : _a[logId]) === null || _b === void 0 ? void 0 : _b.message;
            if (!((_c = _this.config) === null || _c === void 0 ? void 0 : _c[logId])) {
                var logIdCopy = (0, deepCopy_1.deepCopy)(logId);
                logId = "UNKNOWN_LOG";
                additionalData = {
                    invalidEventData: __assign({}, additionalData),
                    invalidLogId: logIdCopy
                };
            }
            var logLevel = (_f = (_e = (_d = _this.config) === null || _d === void 0 ? void 0 : _d[logId]) === null || _e === void 0 ? void 0 : _e.level) !== null && _f !== void 0 ? _f : log_model_1.Log.info;
            var date = new Date();
            var additionalInfo = (0, isEmptyObject_1.isEmptyObject)(additionalData)
                ? ""
                : "| " + JSON.stringify(additionalData);
            console.log(date.toLocaleString("pl-PL") + " | " + logLevel + " | " + logMessage + " " + additionalInfo);
        };
        this.config = config;
        this.isEnabled = isEnabled;
    }
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3Qyx3REFBdUQ7QUFDdkQsaURBQTBDO0FBRzFDOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0g7SUFJRSxnQkFBWSxNQUFpQixFQUFFLFNBQWtCO1FBQWpELGlCQUdDO1FBRU0sVUFBSyxHQUFHLFVBQUMsS0FBYSxFQUFFLGNBQW1COztZQUFuQiwrQkFBQSxFQUFBLG1CQUFtQjtZQUNoRCxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVM7Z0JBQUUsT0FBTztZQUU1QixJQUFNLFVBQVUsR0FBRyxNQUFBLE1BQUEsS0FBSSxDQUFDLE1BQU0sMENBQUcsS0FBSyxDQUFDLDBDQUFFLE9BQU8sQ0FBQztZQUVqRCxJQUFJLENBQUMsQ0FBQSxNQUFBLEtBQUksQ0FBQyxNQUFNLDBDQUFHLEtBQUssQ0FBQyxDQUFBLEVBQUU7Z0JBQ3pCLElBQU0sU0FBUyxHQUFHLElBQUEsbUJBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFFbEMsS0FBSyxHQUFHLGFBQWEsQ0FBQztnQkFDdEIsY0FBYyxHQUFHO29CQUNmLGdCQUFnQixlQUFPLGNBQWMsQ0FBRTtvQkFDdkMsWUFBWSxFQUFFLFNBQVM7aUJBQ3hCLENBQUM7YUFDSDtZQUVELElBQU0sUUFBUSxHQUFHLE1BQUEsTUFBQSxNQUFBLEtBQUksQ0FBQyxNQUFNLDBDQUFHLEtBQUssQ0FBQywwQ0FBRSxLQUFLLG1DQUFJLGVBQUcsQ0FBQyxJQUFJLENBQUM7WUFDekQsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN4QixJQUFNLGNBQWMsR0FBRyxJQUFBLDZCQUFhLEVBQUMsY0FBYyxDQUFDO2dCQUNsRCxDQUFDLENBQUMsRUFBRTtnQkFDSixDQUFDLENBQUMsT0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBRyxDQUFDO1lBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQ04sSUFBSSxDQUFDLGNBQWMsQ0FDcEIsT0FBTyxDQUNSLFdBQU0sUUFBUSxXQUFNLFVBQVUsU0FBSSxjQUFnQixDQUNwRCxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBOUJBLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUE2QkgsYUFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksd0JBQU0ifQ==