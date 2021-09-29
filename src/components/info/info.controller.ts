import { Controller, Response, Get } from "@nestjs/common";
import { InfoService } from "./info.service";
import { IAppInfo } from "../../interfaces/info.interface";
import { Unprotected } from "nest-keycloak-connect";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("info")
@Controller("info")
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get("check")
  @Unprotected()
  check(@Response() res): string {
    return res.status(200).send("OK");
  }

  @Get("app")
  @Unprotected()
  appData(): IAppInfo {
    return this.infoService.appInfo();
  }
}
