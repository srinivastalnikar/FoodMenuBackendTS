"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
const sql = __importStar(require("../model/restaurant"));
const dbService_1 = __importDefault(require("../dbService"));
router.post("/search/:resId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dishName, cuisine, dishDesc, dishCat } = req.body;
    const resId = parseInt(req.params.resId);
    let result;
    if (typeof dishName !== "undefined") {
        result = yield (0, dbService_1.default)(sql.getDishByName(resId, dishName));
    }
    else if (typeof cuisine !== "undefined") {
        result = yield (0, dbService_1.default)(sql.getDishByCuisine(resId, cuisine));
    }
    else if (typeof dishDesc !== "undefined") {
        result = yield (0, dbService_1.default)(sql.getDishByDesc(resId, dishDesc));
    }
    else if (typeof dishCat !== "undefined") {
        result = yield (0, dbService_1.default)(sql.getDishByCategory(resId, dishCat));
    }
    else {
        result = yield (0, dbService_1.default)(sql.getAllDishes(resId));
    }
    res.send(result);
}));
router.post("/addResToFav/:userId/:resId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resId = parseInt(req.params.resId);
    const userId = parseInt(req.params.userId);
    const result = (0, dbService_1.default)(sql.addResToFav(userId, resId));
    res.send(result);
}));
router.delete("/removeResFromFav/:userId/:resId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resId = parseInt(req.params.resId);
    const userId = parseInt(req.params.userId);
    const result = yield (0, dbService_1.default)(sql.removeResFromFav(userId, resId));
    res.send(result);
}));
router.get("/getDishes/:resId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resId = parseInt(req.params.resId);
    const result = yield (0, dbService_1.default)(sql.getAllDishes(resId));
    res.send(result);
}));
router.get("/getResName/:resId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resId = parseInt(req.params.resId);
    const result = yield (0, dbService_1.default)(sql.getIdNameMap(resId));
    res.send(result);
}));
router.get("/:resId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resId = parseInt(req.params.resId);
    const result = yield (0, dbService_1.default)(sql.getResDetails(resId));
    res.send(result);
}));
