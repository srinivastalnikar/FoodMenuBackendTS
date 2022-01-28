"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = __importDefault(require("./dbConfig"));
const executeQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(query);
    try {
        const [rows] = yield dbConfig_1.default.query(query);
        console.log("Query Executed");
        return { success: true, data: rows };
    }
    catch (err) {
        console.log("DB ERR", err);
        return { success: false, data: "ERROR_CONNECTING_TO_DATABASE" };
    }
});
exports.default = executeQuery;
