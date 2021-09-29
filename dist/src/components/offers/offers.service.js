"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const log_1 = require("../../scripts/utils/log");
const users_service_1 = require("../users/users.service");
const authentication_service_1 = require("../authentication/authentication.service");
const offer_interface_1 = require("../../interfaces/offer.interface");
const createOfferSummary_1 = require("../../scripts/offer/createOfferSummary");
let OffersService = class OffersService {
    constructor(offerModel, authenticationService, usersService) {
        this.offerModel = offerModel;
        this.authenticationService = authenticationService;
        this.usersService = usersService;
    }
    async create(token, offer) {
        (0, log_1.log)("START_CREATE_NEW_OFFER");
        if (!token) {
            throw new common_1.HttpException("No access token", common_1.HttpStatus.UNAUTHORIZED);
        }
        const ssoId = await this.authenticationService.authenticate(token);
        const user = await this.usersService.findPublicBySsoId(ssoId);
        if (!user) {
            throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
        }
        const newOffer = new this.offerModel(Object.assign({ author: user._id, premium: false, thumbnail: "" }, offer));
        newOffer.key = newOffer._id;
        newOffer.save();
        (0, log_1.log)("FINISH_CREATE_NEW_OFFER", { id: newOffer.id, author: user._id });
        return newOffer;
    }
    async findAllIds() {
        (0, log_1.log)("FIND_ALL_OFFERS_IDS");
        return this.offerModel.find().distinct("_id");
    }
    async findAllSummaries() {
        (0, log_1.log)("START_FIND_ALL_SUMMARIES");
        return this.offerModel.aggregate([
            {
                $group: {
                    _id: {
                        key: "$_id",
                        location: "$location",
                        price: "$price",
                        trustedLandlord: "$trustedLandlord",
                        premium: "$premium",
                        amountType: "$amountType",
                        currency: "$currency",
                        title: "$title",
                        thumbnail: "$thumbnail",
                        trustedTenantPrice: "$trustedTenantPrice",
                        surface: "$surface",
                        surfaceUnit: "$surfaceUnit",
                        peopleCount: "$peopleCount",
                        roomCount: "$roomCount",
                        additionalFeeFrom: "$additionalFeeFrom",
                        additionalFeeTo: "$additionalFeeTo"
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    key: "$_id.key",
                    location: "$_id.location",
                    price: "$_id.price",
                    trustedLandlord: "$_id.trustedLandlord",
                    premium: "$_id.premium",
                    amountType: "$_id.amountType",
                    currency: "$_id.currency",
                    title: "$_id.title",
                    trustedTenantPrice: "$_id.trustedTenantPrice",
                    surface: "$_id.surface",
                    surfaceUnit: "$_id.surfaceUnit",
                    peopleCount: "$_id.peopleCount",
                    roomCount: "$_id.roomCount",
                    additionalFeeFrom: "$_id.additionalFeeFrom",
                    additionalFeeTo: "$_id.additionalFeeTo"
                }
            }
        ]);
    }
    async getSummaryById(id) {
        (0, log_1.log)("START_FIND_SUMMARY_BY_ID", { id });
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new common_1.HttpException("Invalid passed offer id", common_1.HttpStatus.BAD_REQUEST);
        }
        const offer = await this.offerModel.findById(id).exec();
        if (!offer) {
            throw new common_1.HttpException("Offer not found", common_1.HttpStatus.NOT_FOUND);
        }
        const offerSummary = (0, createOfferSummary_1.createOfferSummary)(offer);
        (0, log_1.log)("FINISH_FIND_SUMMARY_BY_ID", { id });
        return offerSummary;
    }
    async getById(id) {
        (0, log_1.log)("START_FIND_OFFER_BY_ID", { id });
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new common_1.HttpException("Passed invalid offer id", common_1.HttpStatus.BAD_REQUEST);
        }
        const offer = this.offerModel.findById(id).exec();
        if (!offer) {
            throw new common_1.HttpException("Offer not found", common_1.HttpStatus.NOT_FOUND);
        }
        (0, log_1.log)("FINISH_FIND_OFFER_BY_ID", { id });
        return offer;
    }
};
OffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Offer")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        authentication_service_1.AuthenticationService,
        users_service_1.UsersService])
], OffersService);
exports.OffersService = OffersService;
//# sourceMappingURL=offers.service.js.map