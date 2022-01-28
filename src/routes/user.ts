import { UserRequest } from "../config/User";
import { Router } from "express";
const router = Router();
import * as sql from "../model/user";
import executeQuery from "../dbService";

router.post("/login", async (req: UserRequest, res) => {
    const { username, password } = req.body;
    const result = await executeQuery(sql.checkUser(username, password));
    res.send(result);
});

router.post("/signup", async (req: UserRequest, res) => {
    const { username, password } = req.body;
    const exists = await executeQuery(sql.checkIfExist(username));
    if (exists.data.length) {
        const userIdAlreadyRegistered = {
            success: false,
            data: "USERNAME_ALREADY_EXIST",
        };
        res.send(userIdAlreadyRegistered);
        return;
    }
    const userRegistered = await executeQuery(sql.addUser(username, password));
    res.send(userRegistered);
});

export { router };
