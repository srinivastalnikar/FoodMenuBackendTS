import { Router } from "express";
const router = Router();
import { homeRoute } from "./home";
// const home = require("./home");
// const search = require("./search");
// const restaurant = require("./restaurant");
// const dish = require("./dish");
// const cart = require("./cart");
// const user = require("./user");

// router.use("/restaurant", restaurant);
// router.use("/dish", dish);
// router.use("/search", search);
// router.use("/cart", cart);
// router.use("/user", user);
router.use("/", homeRoute);

export { router };
