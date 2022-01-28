import { CategoriesResponse } from "./../config/Categories";
import { RestaurantResponse } from "./../config/Restaurant";
import { Router } from "express";
const router = Router();
import * as sql from "../model/home";
import executeQuery from "../dbService";

router.get("/getCategories", async (req, res) => {
    const result: CategoriesResponse = await executeQuery(sql.getCategories);
    res.send(result);
});

router.get("/getFavRes/:userId", async (req, res) => {
    const { userId: userIdStr } = req.params;
    const userId = parseInt(userIdStr, 10);
    const result: RestaurantResponse = await executeQuery(sql.getFavRes(userId));
    res.send(result);
});

router.get("/", async (req, res) => {
    //get Promoted Restaurants
    const result: RestaurantResponse = await executeQuery(sql.getPromotedRes);
    res.send(result);
});

export { router };
