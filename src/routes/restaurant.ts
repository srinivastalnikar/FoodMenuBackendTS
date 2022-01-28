import { Response, Router } from "express";
const router = Router();
import * as sql from "../model/restaurant";
import executeQuery from "../dbService";
import { SearchRequest } from "../config/Search";

router.post("/search/:resId", async (req: SearchRequest, res: Response) => {
    const { dishName, cuisine, dishDesc, dishCat } = req.body;
    const resId = parseInt(req.params.resId);
    let result;
    if (typeof dishName !== "undefined") {
        result = await executeQuery(sql.getDishByName(resId, dishName));
    } else if (typeof cuisine !== "undefined") {
        result = await executeQuery(sql.getDishByCuisine(resId, cuisine));
    } else if (typeof dishDesc !== "undefined") {
        result = await executeQuery(sql.getDishByDesc(resId, dishDesc));
    } else if (typeof dishCat !== "undefined") {
        result = await executeQuery(sql.getDishByCategory(resId, dishCat));
    } else {
        result = await executeQuery(sql.getAllDishes(resId));
    }
    res.send(result);
});

router.post("/addResToFav/:userId/:resId", async (req, res) => {
    const resId = parseInt(req.params.resId);
    const userId = parseInt(req.params.userId);
    const result = executeQuery(sql.addResToFav(userId, resId));
    res.send(result);
});

router.delete("/removeResFromFav/:userId/:resId", async (req, res) => {
    const resId = parseInt(req.params.resId);
    const userId = parseInt(req.params.userId);
    const result = await executeQuery(sql.removeResFromFav(userId, resId));
    res.send(result);
});

router.get("/getDishes/:resId", async (req, res) => {
    //get Dishes For Restaurant
    const resId = parseInt(req.params.resId);
    const result = await executeQuery(sql.getAllDishes(resId));
    res.send(result);
});

router.get("/getResName/:resId", async (req, res) => {
    //get Restaurant Name
    const resId = parseInt(req.params.resId);
    const result = await executeQuery(sql.getIdNameMap(resId));
    res.send(result);
});

router.get("/:resId", async (req, res) => {
    //get Restaurant Details
    const resId = parseInt(req.params.resId);
    const result = await executeQuery(sql.getResDetails(resId));
    res.send(result);
});

export { router };
