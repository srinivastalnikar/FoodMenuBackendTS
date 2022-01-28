import express from "express";
const app = express();
import bodyParser from "body-parser";
// import routes from "./routes/index.ts"
// const routes = require("./routes/index.js");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/", routes);

app.listen(port, function () {
    console.log(`Express server listening on port ${port}`);
});
