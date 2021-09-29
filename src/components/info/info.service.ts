import { Injectable } from "@nestjs/common";
import pckg from "../../../package.json";
import os from "os";
import { IAppInfo } from "../../interfaces/info.interface";

const machineStartedTime = new Date();

@Injectable()
export class InfoService {
  appInfo(): IAppInfo {
    return {
      version: this.appVersion,
      nodeVersion: this.nodeVersion,
      CPUs: os.cpus().length,
      totalMemeory: os.totalmem(),
      freeMemory: os.freemem(),
      cpuUsage: process.cpuUsage(),
      environment: this.env,
      machineStartedTime,
      currentMachineTime: new Date()
    };
  }

  get env(): string | undefined {
    return process.env.NODE_ENV;
  }

  get appVersion(): string {
    return pckg?.version;
  }

  get nodeVersion(): string {
    return process?.version;
  }
}
