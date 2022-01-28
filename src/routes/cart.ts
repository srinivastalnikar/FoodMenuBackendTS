import { CartResponse, CartItem, AddonResponse } from "./../config/Cart";
import { Router, Request } from "express";
const router = Router();
import * as sql from "../model/cart";
import executeQuery from "../dbService";

router.delete("/deleteFromCart/:userId/:orderId", async (req: Request, res) => {
    const userId = parseInt(req.params.userId);
    const orderId = parseInt(req.params.orderId);
    const result = executeQuery(sql.deleteItemFromCart(orderId, userId));
    res.send(result);
});

router.delete("/checkOutCartItems/:userId", async (req: Request, res) => {
    const userId = parseInt(req.params.userId);
    const result = await executeQuery(sql.checkOutCartItems(userId));
    res.send(result);
});

router.post("/decreaseQuantityInCart/:orderId", async (req: Request, res) => {
    const orderId = parseInt(req.params.orderId);
    const result = await executeQuery(sql.decreaseQuantityInCart(orderId));
    res.send(result);
});

router.get("/getOrderItemDetail/:userId/:orderItemId", async (req: Request, res) => {
    const userId = parseInt(req.params.userId);
    const orderItemId = parseInt(req.params.orderItemId);
    const orderItemDetails: CartResponse = await executeQuery(
        sql.getOrderItemDetail(userId, orderItemId)
    );
    const addonsForOrderItems: AddonResponse = await executeQuery(
        sql.getAddonsForOrderItem(orderItemId)
    );
    orderItemDetails.data[0].addons = addonsForOrderItems.data;
    res.send(orderItemDetails);
});

router.get("/:userId", async (req: Request, res) => {
    const userId = parseInt(req.params.userId);
    const allItemsInCart: CartResponse = await executeQuery(sql.getAllItemsInCart(userId));
    const cartItems = await Promise.all(
        allItemsInCart.data.map(async (item: CartItem) => {
            const addonsForOrderItem: AddonResponse = await executeQuery(
                sql.getAddonsForOrderItem(item.order_id)
            );
            item.addons = addonsForOrderItem.data;
            return item;
        })
    );
    const result: CartResponse = { success: true, data: cartItems };
    res.send(result);
});

export { router };
