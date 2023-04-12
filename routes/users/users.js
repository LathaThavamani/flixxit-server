import { Router } from "express";
import { getAllItems } from "../../mongo-db-utillities.js";
import jwt from 'jsonwebtoken'
import { ObjectId } from "mongodb";
const userRoutes = Router();
userRoutes.get('/generate-token', (req, res) => {

    // create a token and return the token only when user present in the database
    let obj = {
        useremail: req.headers.useremail
    }

    getAllItems('users', obj).then(allusers => {
        let user = allusers[0]
        let token = jwt.sign(obj, process.env.SECRETE_KEY, { expiresIn: process.env.TOKEN_EXPIRES_IN })
        return res.json({ token: token, userId: user._id, username: user.username })
    })
})

userRoutes.get('', (req, res) => {
    getAllItems('users')
        .then(x => {
            return res.json(x)

        })
})

export default userRoutes

