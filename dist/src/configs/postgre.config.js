"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgreConfig = void 0;
require("dotenv").config();
exports.postgreConfig = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    autoLoadEntities: true
};
//# sourceMappingURL=postgre.config.js.map