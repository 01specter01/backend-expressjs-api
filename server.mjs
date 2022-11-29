import data from "./data.json" assert { type: "json" };
import express from "express";

const app = express();

const server = app.listen(3011, () => {
    console.log("start");
});
app.get("/", (request, response) => {
    response.send(data);
});
