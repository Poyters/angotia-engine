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
exports.OfferSchema = void 0;
const mongoose = __importStar(require("mongoose"));
const offer_interface_1 = require("../../interfaces/offer.interface");
const contractPeriod_model_1 = require("../../models/contractPeriod.model");
const currency_model_1 = require("../../models/currency.model");
const surfaceUnit_model_1 = require("../../models/surfaceUnit.model");
exports.OfferSchema = new mongoose.Schema({
    key: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Offer",
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: { type: String, required: true },
    amountType: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, enum: currency_model_1.Currency, required: true },
    additionalFeeFrom: { type: Number, required: true },
    additionalFeeTo: { type: Number, required: true },
    description: { type: String, required: true },
    offerPhoto: { type: [String], required: true },
    preferablePeople: {
        type: Map,
        of: Boolean,
        required: true
    },
    worthToKnow: {
        type: Map,
        of: Boolean,
        required: true
    },
    additionalEquipment: {
        type: Map,
        of: Boolean,
        required: true
    },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    trustedTenantPrice: { type: Number },
    surface: { type: Number },
    surfaceUnit: { type: String, enum: surfaceUnit_model_1.SurfaceUnit },
    peopleCount: { type: Number },
    roomCount: { type: Number },
    floor: { type: Number },
    englishDescription: { type: String },
    contractPeriod: { type: String, enum: contractPeriod_model_1.ContractPeriod },
    locationDescription: { type: String },
    preferredAge: { type: [Number] }
});
//# sourceMappingURL=offer.model.js.map