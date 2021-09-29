"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOfferSummary = void 0;
const offer_interface_1 = require("../../interfaces/offer.interface");
const createOfferSummary = (offer) => ({
    key: offer._id,
    title: offer.title,
    thumbnail: offer.thumbnail,
    location: offer.location,
    price: offer.price,
    trustedLandlord: offer.trustedLandlord,
    amountType: offer.amountType,
    trustedTenantPrice: offer.trustedTenantPrice,
    currency: offer.currency,
    surface: offer.surface,
    surfaceUnit: offer.surfaceUnit,
    peopleCount: offer.peopleCount,
    roomCount: offer.roomCount,
    additionalFeeFrom: offer.additionalFeeFrom,
    additionalFeeTo: offer.additionalFeeTo,
    premium: offer.premium
});
exports.createOfferSummary = createOfferSummary;
//# sourceMappingURL=createOfferSummary.js.map