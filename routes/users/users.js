import { Router } from "express";
import { getAllItems } from "../../mongo-db-utillities.js";
import jwt from 'jsonwebtoken'
const userRoutes = Router();
userRoutes.get('/generate-token', (req, res) => {

    // create a token and return the token only when user present in the database
    let obj = {
        useremail: req.headers.useremail
    }

    getAllItems('users', obj).then(allusers => {
        let user = allusers[0]
        let token = jwt.sign(obj, process.env.SECRETE_KEY, { expiresIn: process.env.TOKEN_EXPIRES_IN })
        return res.json({ token: token })
    })
})

export default userRoutes

