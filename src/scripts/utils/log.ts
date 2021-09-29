import { logsConfig } from "../../configs/logs.config";
import { deepCopy } from "./deepCopy";
import { isEmptyObject } from "./isEmptyObject";
import { Log } from "../../models/log.model";

export const log = (logId: string, additionalData = {}) => {
  if (process.env.APP_LOGS !== Log.enabled) return;

  const logMessage = logsConfig?.[logId]?.message;

  if (!logsConfig?.[logId]) {
    const logIdCopy = deepCopy(logId);

    logId = "UNKNOWN_LOG";
    additionalData = {
      invalidEventData: { ...additionalData },
      invalidLogId: logIdCopy
    };
  }

  const logLevel = logsConfig?.[logId]?.level
    ? `${logsConfig?.[logId]?.level} | `
    : "";
  const date = new Date();
  const additionalInfo = isEmptyObject(additionalData)
    ? ""
    : `| ${JSON.stringify(additionalData)}`;

  console.log(
    `${date.toLocaleString(
      "pl-PL"
    )} | ${logLevel} ${logMessage} ${additionalInfo}`
  );
};
