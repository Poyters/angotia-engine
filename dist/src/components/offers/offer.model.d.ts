import * as mongoose from "mongoose";
import { IOffer } from "interfaces/offer.interface";
export interface IOfferDocument extends mongoose.Document, IOffer {
}
export declare const OfferSchema: mongoose.Schema<mongoose.Document<any, any, any>, mongoose.Model<mongoose.Document<any, any, any>, any, any>, undefined, {}>;
