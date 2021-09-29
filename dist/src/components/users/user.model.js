"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = __importStar(require("mongoose"));
const user_interface_1 = require("../../interfaces/user.interface");
exports.UserSchema = new mongoose.Schema({
    created: { type: Number, required: true },
    ssoId: { type: String, required: true, unique: true },
    profile: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        description: { type: String },
        avatar: { type: mongoose.Schema.Types.Mixed },
        backgroundPicture: { type: mongoose.Schema.Types.Mixed },
        companyName: { type: String },
        phone: { type: String },
        gender: { type: String },
        age: { type: Number },
        keywords: { type: [String] },
        pet: {
            types: { type: [String] },
            description: { type: String }
        }
    }
});
//# sourceMappingURL=user.model.js.map