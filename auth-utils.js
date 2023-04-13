import { generateJsonMessage } from "./commonHttpMessages.js"
import { getAllItems } from "./mongo-db-utillities.js"
import { User } from "./Model/userModel.js"
import jwt from "jsonwebtoken"

export const authorizeFromDatabase = async (req, res, next) => {
    const user = await getAllItems(User, {
        useremail: req.headers.useremail,
        password: req.headers.password
    })
    if (user) {
        // go and execute the request
        next()
    } else {
        //send dummy response
        res.json(generateJsonMessage("Un Authorized"))
    }
}

export const authorizeFromToken = (req, res, next) => {

    let token = req.headers.token;

    try {
        const result = jwt.verify(token, process.env.SECRETE_KEY);
        req.headers.userObject = result
        next()
    } catch (err) {
        return res.json(generateJsonMessage("Un Authorized"))
    }
}