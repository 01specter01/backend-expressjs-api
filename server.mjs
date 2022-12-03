import data from "./data.json" assert { type: "json" };
import express from "express";

const app = express();

const server = app.listen(3011, () => {
    console.log("start");
});
//1
app.get("/data", (request, response) => {
    response.json(data);
});
//2
app.get("/data/:id", (request, response) => {
    const result = data.find((el) => el.id === +request.params.id);

    if (result) {
        return response.json(result);
    }
    response.json("No user with this id");
});
//3
app.get("/username", (request, response) => {
    const result = data.find((el) => el.username === request.query.abc);

    if (result) {
        return response.json(result);
    }
    response.json("No user with this id");
});
