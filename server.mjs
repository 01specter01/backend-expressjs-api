import data from "./data.json" assert { type: "json" };
import express from "express";

const app = express();

const server = app.listen(3011, () => {
    console.log("start");
});
app.get ("/user", (request, response) => {
    response.json()
})
app.get("/user/:id", (request, response) => {
    const result = user.find((el) => el.id === +request.params.id);

    if (result) {
        return response.json(result);
    }
    response.json("No user with this id");
});
