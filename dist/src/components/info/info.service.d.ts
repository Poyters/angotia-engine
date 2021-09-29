import { IAppInfo } from "../../interfaces/info.interface";
export declare class InfoService {
    appInfo(): IAppInfo;
    get env(): string | undefined;
    get appVersion(): string;
    get nodeVersion(): string;
}
