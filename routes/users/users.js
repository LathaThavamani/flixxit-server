import { Router } from "express";
import { getAllItems } from "../../mongo-db-utillities.js";
import jwt from 'jsonwebtoken'
import { User } from "../../Model/userModel.js";
const userRoutes = Router();

// Generate token for authenticated user
userRoutes.get('/generate-token', async (req, res) => {
    // create a token and return the token only when user present in the database
    let obj = {
        useremail: req.headers.useremail
    }

    const user = await getAllItems(User, obj)
    if (user) {
        let token = jwt.sign(obj, process.env.SECRETE_KEY, { expiresIn: process.env.TOKEN_EXPIRES_IN })
        return res.json({ token: token, userId: user._id, username: user.username })
    }
})

export default userRoutes

