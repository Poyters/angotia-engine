"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logsConfig = void 0;
var log_model_1 = require("../models/log.model");
exports.logsConfig = {
    UNKNOWN_LOG: {
        message: "Unknown log",
        level: log_model_1.Log.warning
    },
    ACTIVED_LIB_LOGGER: {
        message: "Activated RentSofa SDK internal logger"
    },
    SILENT_CHECK_SSO_ADDRESS: {
        message: "Prepared silent check sso address"
    },
    IS_USER_LOGGED_IN: {
        message: "Check if user is logged in"
    },
    CREATING_ANGOTIA_USER: {
        message: "Creating Angotia user..."
    },
    CREATING_ANGOTIA_USER_ERROR: {
        message: "Creating Angotia user error",
        level: log_model_1.Log.error
    },
    FETCH_ANGOTIA_USER_ERROR: {
        message: "Creating Angotia user error",
        level: log_model_1.Log.warning
    },
    CREATED_ANGOTIA_USER: {
        message: "Created Angotia user"
    },
    FETCHING_ANGOTIA_USER: {
        message: "Fetching Angotia user..."
    },
    FETCHED_ANGOTIA_USER: {
        message: "Fetched Angotia user"
    },
    FORCE_FETCHING_ANGOTIA_USER: {
        message: "Force fetching Angotia user..."
    },
    FORCE_FETCHED_ANGOTIA_USER: {
        message: "Fetched Angotia user with force"
    },
    FORCE_FETCHING_ANGOTIA_USER_ERROR: {
        message: "Force fetching Angotia user end with failure",
        level: log_model_1.Log.fatal
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL2xvZ3MuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUEwQztBQUU3QixRQUFBLFVBQVUsR0FBRztJQUN4QixXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsYUFBYTtRQUN0QixLQUFLLEVBQUUsZUFBRyxDQUFDLE9BQU87S0FDbkI7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixPQUFPLEVBQUUsd0NBQXdDO0tBQ2xEO0lBQ0Qsd0JBQXdCLEVBQUU7UUFDeEIsT0FBTyxFQUFFLG1DQUFtQztLQUM3QztJQUNELGlCQUFpQixFQUFFO1FBQ2pCLE9BQU8sRUFBRSw0QkFBNEI7S0FDdEM7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixPQUFPLEVBQUUsMEJBQTBCO0tBQ3BDO0lBQ0QsMkJBQTJCLEVBQUU7UUFDM0IsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxLQUFLLEVBQUUsZUFBRyxDQUFDLEtBQUs7S0FDakI7SUFDRCx3QkFBd0IsRUFBRTtRQUN4QixPQUFPLEVBQUUsNkJBQTZCO1FBQ3RDLEtBQUssRUFBRSxlQUFHLENBQUMsT0FBTztLQUNuQjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLE9BQU8sRUFBRSxzQkFBc0I7S0FDaEM7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixPQUFPLEVBQUUsMEJBQTBCO0tBQ3BDO0lBQ0Qsb0JBQW9CLEVBQUU7UUFDcEIsT0FBTyxFQUFFLHNCQUFzQjtLQUNoQztJQUNELDJCQUEyQixFQUFFO1FBQzNCLE9BQU8sRUFBRSxnQ0FBZ0M7S0FDMUM7SUFDRCwwQkFBMEIsRUFBRTtRQUMxQixPQUFPLEVBQUUsaUNBQWlDO0tBQzNDO0lBQ0QsaUNBQWlDLEVBQUU7UUFDakMsT0FBTyxFQUFFLDhDQUE4QztRQUN2RCxLQUFLLEVBQUUsZUFBRyxDQUFDLEtBQUs7S0FDakI7Q0FDRixDQUFDIn0=