
import express from "express";
import cors from 'cors'
import userRoutes from "./routes/users/users.js";
import profileRoutes from "./routes/users/profile.js";
import signupRoutes from './routes/signup/signup.js'
import movieRoutes from "./routes/movies/movies.js";
import { authorizeFromDatabase as authorizeFromDatabase, authorizeFromToken } from "./auth-utils.js";
import dotenv from 'dotenv'
dotenv.config();

export function getUrl() {
    return process.env.CONNECTION_STRING
}

const app = express();

app.use(express.json())
app.use(cors())

app.use('/signup', signupRoutes)
app.use("/users", authorizeFromDatabase, userRoutes)
app.use("/profile", authorizeFromToken, profileRoutes)
app.use("/movies", authorizeFromToken, movieRoutes)


app.listen(3001, () => {
    console.log("Server started");
});

