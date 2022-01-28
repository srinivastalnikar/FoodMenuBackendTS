import { Router } from "express";
const homeRoute = Router();
const sql = require("../model/home.js");
const { executeQuery } = require("../dbService");

homeRoute.get("/getCategories", async (req, res) => {
    const result = await executeQuery(sql.getCategories);
    res.send(result);
});

homeRoute.get("/getFavRes/:userId", async (req, res) => {
    const { userId } = req.params;
    const result = await executeQuery(sql.getFavRes(userId));
    res.send(result);
});

homeRoute.get("/", async (req, res) => {
    const result = await executeQuery(sql.getPromotedRes);
    res.send(result);
});

export { homeRoute };
