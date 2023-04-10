import { Router } from "express";
import axios from "axios";

const moviesRouter = Router();

moviesRouter.get('/trending', async (req, res) => {
    let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(data.results)

})

moviesRouter.get('/toprated', async (req, res) => {
    let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(data.results)

})

moviesRouter.get('/detail', async (req, res) => {
    let movieId = req.query.id;
    let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(data)

})

moviesRouter.get('/video', async (req, res) => {
    let movieId = req.query.id;
    let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(data.results[0])

})

moviesRouter.get('/search', async (req, res) => {
    let searchText = req.query.searchText;
    let { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${searchText}`
    );
    res.json(data.results)
})


export default moviesRouter