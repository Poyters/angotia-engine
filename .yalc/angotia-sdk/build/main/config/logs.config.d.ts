import { Log } from "../models/log.model";
export declare const logsConfig: {
    UNKNOWN_LOG: {
        message: string;
        level: Log;
    };
    ACTIVED_LIB_LOGGER: {
        message: string;
    };
    SILENT_CHECK_SSO_ADDRESS: {
        message: string;
    };
    IS_USER_LOGGED_IN: {
        message: string;
    };
    CREATING_ANGOTIA_USER: {
        message: string;
    };
    CREATING_ANGOTIA_USER_ERROR: {
        message: string;
        level: Log;
    };
    FETCH_ANGOTIA_USER_ERROR: {
        message: string;
        level: Log;
    };
    CREATED_ANGOTIA_USER: {
        message: string;
    };
    FETCHING_ANGOTIA_USER: {
        message: string;
    };
    FETCHED_ANGOTIA_USER: {
        message: string;
    };
    FORCE_FETCHING_ANGOTIA_USER: {
        message: string;
    };
    FORCE_FETCHED_ANGOTIA_USER: {
        message: string;
    };
    FORCE_FETCHING_ANGOTIA_USER_ERROR: {
        message: string;
        level: Log;
    };
};
