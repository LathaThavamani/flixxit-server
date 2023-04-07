
import express from "express";
import cors from 'cors'

import movieRoutes from "./routes/movies/movies.js";
import dotenv from 'dotenv'
dotenv.config();

export function getUrl() {
    return process.env.CONNECTION_STRING
}

const app = express();

app.use(express.json())
app.use(cors())

app.use("/movies", movieRoutes)


app.listen(3001, () => {
    console.log("Server started");
});

