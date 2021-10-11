import { Logger, Controls } from "angotia-sdk";
import { logsConfig } from "configs/logs.config";

export const logger = new Logger(
  logsConfig,
  process.env.APP_LOGS === Controls.enabled
);
