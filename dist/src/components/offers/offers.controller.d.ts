import { OffersService } from "./offers.service";
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    allIds(): Promise<string[]>;
    allSummaries(): Promise<import("../../interfaces/offer.interface").IOfferSummary[]>;
    getSummaryById(id: string): Promise<import("../../interfaces/offer.interface").IOfferSummary>;
    getById(id: string): Promise<import("./offer.model").IOfferDocument>;
    addOffer(token: string, offerDTO: string): Promise<import("./offer.model").IOfferDocument>;
}
