import { Router } from "express";
import { getAllItems } from "../../mongo-db-utillities.js";
import jwt from 'jsonwebtoken'
import { ObjectId } from "mongodb";
import { User } from "../../Model/userModel.js";
const userRoutes = Router();
userRoutes.get('/generate-token', async (req, res) => {

    // // create a token and return the token only when user present in the database
    let obj = {
        useremail: req.headers.useremail
    }

    //getAllItems(User, obj).then(user => {
    //let user = allusers[0]
    //let obj = req.body;
    const user = await getAllItems(User, obj)
    if (user) {
        let token = jwt.sign(obj, process.env.SECRETE_KEY, { expiresIn: process.env.TOKEN_EXPIRES_IN })
        return res.json({ token: token, userId: user._id, username: user.username })
    }
})

export default userRoutes

