import { Model } from "mongoose";
import { IOfferDocument } from "./offer.model";
import { UsersService } from "../users/users.service";
import { AuthenticationService } from "../authentication/authentication.service";
import { IOfferSummary } from "interfaces/offer.interface";
export declare class OffersService {
    private readonly offerModel;
    private authenticationService;
    private usersService;
    constructor(offerModel: Model<IOfferDocument>, authenticationService: AuthenticationService, usersService: UsersService);
    create(token: string, offer: IOfferDocument): Promise<IOfferDocument>;
    findAllIds(): Promise<string[]>;
    findAllSummaries(): Promise<IOfferSummary[]>;
    getSummaryById(id: string): Promise<IOfferSummary>;
    getById(id: string): Promise<IOfferDocument>;
}
