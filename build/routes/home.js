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
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoute = void 0;
const express_1 = require("express");
const homeRoute = (0, express_1.Router)();
exports.homeRoute = homeRoute;
const sql = require("../model/home.js");
const { executeQuery } = require("../dbService");
homeRoute.get("/getCategories", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield executeQuery(sql.getCategories);
    res.send(result);
}));
homeRoute.get("/getFavRes/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield executeQuery(sql.getFavRes(userId));
    res.send(result);
}));
homeRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield executeQuery(sql.getPromotedRes);
    res.send(result);
}));
