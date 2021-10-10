import { Log } from "angotia-sdk";

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
  AUTHENTICATE_BY_TOKEN: {
    message: "Start authenticating by passed token"
  },
  FIND_USER_BY_SSO: {
    message: "Started looking for user by passed sso id"
  },
  FIND_USER_BY_ID: {
    message: "Started looking for user by passed id"
  },
  FIND_ALL_USERS: {
    message: "Started looking for all users"
  },
  FIND_ALL_USERS_IDS: {
    message: "Finding all users ids"
  },
  START_FIND_OFFER_BY_ID: {
    message: "Finding offer by id..."
  },
  GET_USER_CHARACTERS: {
    message: "Start getting user characters"
  },
  GOT_USER_CHARACTERS: {
    message: "Finished getting user characters"
  },
  START_INSERTING_CHAR: {
    message: "Start inserting user"
  },
  FINISHED_INSERTING_CHAR: {
    message: "Finished inserting user"
  },
  AUTHENTICATED_BY_TOKEN: {
    message: "Authenticated by token"
  }
};
