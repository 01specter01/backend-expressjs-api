import data from "./data.json";
import express from "express";

const app = express();

function dataList({ ...data }) {
    {
        <ul>
            {data.map((s) => (
                <li>{s}</li>
            ))}
        </ul>;
    }
}
const server = app.listen(3011, () => {
    console.log("start");
});
app.get("/", (request, response) => {
    response.send(`${dataList}`);
});
