"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidAccountType = void 0;
const accountType_model_1 = require("models/accountType.model");
const isValidAccountType = accountType => Object.values(accountType_model_1.AccountType).includes(accountType);
exports.isValidAccountType = isValidAccountType;
//# sourceMappingURL=isValidAccountType.js.map