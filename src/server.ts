import express from "express";
const app = express();
import bodyParser from "body-parser";
import { router as routes } from "./routes/index";

const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, function () {
    console.log(`Express server listening on port ${port}`);
});
