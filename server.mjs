import data from "./data.json";
import express from "express";

const app = express();
const output = {
    <ul>
        {data.map(( key, id) => (
            <li key={}>{id}</li>
        ))}
    </ul>
}
const server = app.listen(3011, () => {
    
    console.log("start");
});
app.get("/", (request, response) => {
    response.send(`${server}`);
});
