import { AmountType } from "models/amountType.model";
import { ContractPeriod } from "models/contractPeriod.model";
import { Currency } from "models/currency.model";
import { PreferablePeople } from "models/preferablePeople.model";
import { SurfaceUnit } from "models/surfaceUnit.model";
import { WorthToKnow } from "models/worthToKnow.model";
import { AdditionalEquipment } from "models/additionalEquipment.model";
export interface IOffer {
    key: string;
    author: string;
    title: string;
    amountType: AmountType;
    price: number;
    currency: Currency;
    additionalFeeFrom: number;
    additionalFeeTo: number;
    description: string;
    thumbnail: string;
    offerPhoto: string[];
    preferablePeople: Record<PreferablePeople, boolean>;
    worthToKnow: Record<WorthToKnow, boolean>;
    additionalEquipment: Record<AdditionalEquipment, boolean>;
    location: {
        lat: number;
        lng: number;
    };
    premium: boolean;
    trustedLandlord: boolean;
    trustedTenantPrice?: number | null;
    surface?: number | null;
    surfaceUnit?: SurfaceUnit | null;
    peopleCount?: number | null;
    roomCount?: number | null;
    floor?: number | null;
    englishDescription?: string | null;
    contractPeriod?: ContractPeriod | null;
    locationDescription?: string | null;
    preferredAge?: number[] | null;
}
export declare type INewOffer = Omit<IOffer, "key" | "author" | "smallOfferPhoto" | "premium" | "trustedLandlord" | "thumbnail">;
export declare type IOfferSummary = Pick<IOffer, "key" | "title" | "location" | "price" | "thumbnail" | "trustedLandlord" | "amountType" | "trustedTenantPrice" | "currency" | "surface" | "surfaceUnit" | "peopleCount" | "roomCount" | "additionalFeeFrom" | "additionalFeeTo" | "premium">;
