import { Router } from "express";
import { getAllItems } from "../../mongo-db-utillities.js";
import jwt from 'jsonwebtoken'
import { ObjectId } from "mongodb";
const profileRoutes = Router();

profileRoutes.get('', async (req, res) => {

    let obj = {
        _id: new ObjectId(req.query.id)
    }

    getAllItems('users', obj).then(allusers => {
        let user = allusers[0]
        let token = jwt.sign(obj, process.env.SECRETE_KEY, { expiresIn: process.env.TOKEN_EXPIRES_IN })
        return res.json({ user: user })
    })

})

export default profileRoutes

