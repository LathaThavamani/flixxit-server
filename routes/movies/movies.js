import { Router } from "express";
import axios from "axios";

const moviesRouter = Router();

moviesRouter.get('/trending', async (req, res) => {
    let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(data.results)

})

moviesRouter.get('/toprated', async (req, res) => {
    let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(data.results)

})


export default moviesRouter