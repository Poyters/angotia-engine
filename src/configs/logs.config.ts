import { Log } from "../models/log.model";

export const logsConfig = {
  UNKNOWN_LOG: {
    message: "Unknown log",
    level: Log.warning
  },
  APP_STARTED: {
    message: "Application started"
  },
  START_INSERT_USER: {
    message: "Create new user..."
  },
  FINISH_INSERT_USER: {
    message: "Inserted a new user"
  },
  START_GET_USER: {
    message: "Started getting user profile"
  },
  FINISH_GET_USER: {
    message: "Finished getting user profile"
  },
  START_GET_EVERY_USER_PUBLIC_DATA: {
    message: "Started fetching every user public data"
  },
  FINISH_GET_EVERY_USER_PUBLIC_DATA: {
    message: "Finished fetching every user public data"
  },
  START_GET_PUBLIC_USER: {
    message: "Started getting user public data"
  },
  FINISH_GET_PUBLIC_USER: {
    message: "Finished getting user public data"
  },
  START_UPDATE_USER_PROFILE: {
    message: "Started updating user profile"
  },
  FINISH_UPDATE_USER_PROFILE: {
    message: "Finished updating user profile"
  },
  AUTHENTICATE_BY_TOKEN: {
    message: "Start authenticating by passed token"
  },
  FIND_USER_BY_SSO: {
    message: "Started looking for user by passed sso id"
  },
  FIND_PUBLIC_USER_BY_SSO: {
    message: "Started looking for public user by passed sso id"
  },
  FIND_USER_BY_ID: {
    message: "Started looking for user by passed id"
  },
  FIND_ALL_USERS: {
    message: "Started looking for all users"
  },
  START_CREATE_NEW_OFFER: {
    message: "Create new offer..."
  },
  FINISH_CREATE_NEW_OFFER: {
    message: "Created new offer"
  },
  FIND_ALL_OFFERS_IDS: {
    message: "Finding all offers ids"
  },
  FIND_ALL_USERS_IDS: {
    message: "Finding all users ids"
  },
  START_FIND_OFFER_BY_ID: {
    message: "Finding offer by id..."
  },
  FINISH_FIND_OFFER_BY_ID: {
    message: "Found offer by id"
  },
  START_FIND_ALL_SUMMARIES: {
    message: "Finding offer all summaries"
  },
  START_FIND_SUMMARY_BY_ID: {
    message: "Finding offer summary by id..."
  },
  FINISH_FIND_SUMMARY_BY_ID: {
    message: "Found offer summary by id"
  }
};
