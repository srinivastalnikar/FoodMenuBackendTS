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
const sql = __importStar(require("../model/cart"));
const dbService_1 = __importDefault(require("../dbService"));
router.delete("/deleteFromCart/:userId/:orderId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    const orderId = parseInt(req.params.orderId);
    const result = (0, dbService_1.default)(sql.deleteItemFromCart(orderId, userId));
    res.send(result);
}));
router.delete("/checkOutCartItems/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    const result = yield (0, dbService_1.default)(sql.checkOutCartItems(userId));
    res.send(result);
}));
router.post("/decreaseQuantityInCart/:orderId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = parseInt(req.params.orderId);
    const result = yield (0, dbService_1.default)(sql.decreaseQuantityInCart(orderId));
    res.send(result);
}));
router.get("/getOrderItemDetail/:userId/:orderItemId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    const orderItemId = parseInt(req.params.orderItemId);
    const orderItemDetails = yield (0, dbService_1.default)(sql.getOrderItemDetail(userId, orderItemId));
    const addonsForOrderItems = yield (0, dbService_1.default)(sql.getAddonsForOrderItem(orderItemId));
    orderItemDetails.data[0].addons = addonsForOrderItems.data;
    res.send(orderItemDetails);
}));
router.get("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    const allItemsInCart = yield (0, dbService_1.default)(sql.getAllItemsInCart(userId));
    const cartItems = yield Promise.all(allItemsInCart.data.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        const addonsForOrderItem = yield (0, dbService_1.default)(sql.getAddonsForOrderItem(item.order_id));
        item.addons = addonsForOrderItem.data;
        return item;
    })));
    const result = { success: true, data: cartItems };
    res.send(result);
}));
