"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const conn = mysql2_1.default.createPool({
    host: "bi30tloqqg6aqnsjzk5h-mysql.services.clever-cloud.com",
    user: "uapdthevueb7t3hg",
    password: "zEZ6Q84UgLSHREfJwowg",
    database: "bi30tloqqg6aqnsjzk5h",
    connectionLimit: 5,
});
const db = conn.promise();
console.log("DB Connected");
exports.default = db;
