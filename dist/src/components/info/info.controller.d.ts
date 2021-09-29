import { InfoService } from "./info.service";
import { IAppInfo } from "../../interfaces/info.interface";
export declare class InfoController {
    private readonly infoService;
    constructor(infoService: InfoService);
    check(res: any): string;
    appData(): IAppInfo;
}
