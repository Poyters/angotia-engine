"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var logger_1 = require("../utils/logger");
var logs_config_1 = require("../config/logs.config");
var controls_model_1 = require("../models/controls.model");
var envSettings = process.env.NEXT_PUBLIC_SDK_LOGGER ||
    process.env.SDK_LOGGER ||
    process.env.REACT_APP_SDK_LOGGER;
var presentLogger = envSettings === controls_model_1.Controls.enabled;
exports.logger = new logger_1.Logger(logs_config_1.logsConfig, presentLogger);
exports.logger.write("ACTIVED_LIB_LOGGER");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbmZpZy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMENBQXlDO0FBQ3pDLHFEQUFtRDtBQUNuRCwyREFBb0Q7QUFFcEQsSUFBTSxXQUFXLEdBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0I7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7QUFDbkMsSUFBTSxhQUFhLEdBQUcsV0FBVyxLQUFLLHlCQUFRLENBQUMsT0FBTyxDQUFDO0FBRTFDLFFBQUEsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLHdCQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFNUQsY0FBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDIn0=