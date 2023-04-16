import { Router } from "express";
import axios from "axios";

//const TMDB_URL = process.env.TMDB_API_URL
const moviesRouter = Router();

moviesRouter.get('/trending', async (req, res) => {
    let { data } = await axios.get(
        `${process.env.TMDB_API_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(data.results)

})

moviesRouter.get('/toprated', async (req, res) => {
    let { data } = await axios.get(
        `${process.env.TMDB_API_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(data.results)

})

moviesRouter.get('/detail', async (req, res) => {
    let movieId = req.query.id;
    let { data } = await axios.get(
        `${process.env.TMDB_API_URL}/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(data)

})

moviesRouter.get('/video', async (req, res) => {
    let movieId = req.query.id;
    let { data } = await axios.get(
        `${process.env.TMDB_API_URL}/movie/${movieId}/videos?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(data.results[0])

})

moviesRouter.get('/search', async (req, res) => {
    let searchText = req.query.searchText;
    let { data } = await axios.get(
        `${process.env.TMDB_API_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${searchText}`
    );
    res.json(data.results)
})


export default moviesRouter