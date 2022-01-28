import { Router } from "express";
const router = Router();
import { router as home } from "./home";
import { router as cart } from "./cart";
import { router as search } from "./search";
import { router as user } from "./user";
import { router as restaurant } from "./restaurant";

router.use("/restaurant", restaurant);
// router.use("/dish", dish);
router.use("/search", search);
router.use("/cart", cart);
router.use("/user", user);
router.use("/", home);

export { router };
