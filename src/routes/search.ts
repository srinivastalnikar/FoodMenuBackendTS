import { Response } from "express";
import { SearchRequest } from "./../config/Search";
import { Router } from "express";
const router = Router();
import * as sql from "../model/search";
import executeQuery from "../dbService";

router.post("/", async (req: SearchRequest, res: Response) => {
    const { dishName, resName, cuisine, dishDesc, dishCat } = req.body;
    let result;
    if (typeof dishName !== "undefined") {
        result = await executeQuery(sql.getDishByName(dishName));
    } else if (typeof resName !== "undefined") {
        result = await executeQuery(sql.getResByName(resName));
    } else if (typeof cuisine !== "undefined") {
        result = await executeQuery(sql.getDishByCuisine(cuisine));
    } else if (typeof dishDesc !== "undefined") {
        result = await executeQuery(sql.getDishByDesc(dishDesc));
    } else if (typeof dishCat !== "undefined") {
        result = await executeQuery(sql.getDishByCategory(dishCat));
    } else {
        result = await executeQuery(sql.getAllDishes);
    }
    res.send(result);
});

export { router };
