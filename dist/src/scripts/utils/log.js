"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const logs_config_1 = require("../../configs/logs.config");
const deepCopy_1 = require("./deepCopy");
const isEmptyObject_1 = require("./isEmptyObject");
const log_model_1 = require("../../models/log.model");
const log = (logId, additionalData = {}) => {
    var _a, _b, _c;
    if (process.env.APP_LOGS !== log_model_1.Log.enabled)
        return;
    const logMessage = (_a = logs_config_1.logsConfig === null || logs_config_1.logsConfig === void 0 ? void 0 : logs_config_1.logsConfig[logId]) === null || _a === void 0 ? void 0 : _a.message;
    if (!(logs_config_1.logsConfig === null || logs_config_1.logsConfig === void 0 ? void 0 : logs_config_1.logsConfig[logId])) {
        const logIdCopy = (0, deepCopy_1.deepCopy)(logId);
        logId = "UNKNOWN_LOG";
        additionalData = {
            invalidEventData: Object.assign({}, additionalData),
            invalidLogId: logIdCopy
        };
    }
    const logLevel = ((_b = logs_config_1.logsConfig === null || logs_config_1.logsConfig === void 0 ? void 0 : logs_config_1.logsConfig[logId]) === null || _b === void 0 ? void 0 : _b.level)
        ? `${(_c = logs_config_1.logsConfig === null || logs_config_1.logsConfig === void 0 ? void 0 : logs_config_1.logsConfig[logId]) === null || _c === void 0 ? void 0 : _c.level} | `
        : "";
    const date = new Date();
    const additionalInfo = (0, isEmptyObject_1.isEmptyObject)(additionalData)
        ? ""
        : `| ${JSON.stringify(additionalData)}`;
    console.log(`${date.toLocaleString("pl-PL")} | ${logLevel} ${logMessage} ${additionalInfo}`);
};
exports.log = log;
//# sourceMappingURL=log.js.map