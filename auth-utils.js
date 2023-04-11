import { generateJsonMessage } from "./commonHttpMessages.js"
import { getAllItems } from "./mongo-db-utillities.js"
import jwt from "jsonwebtoken"

export const authorizeFromDatabase = (req, res, next) => {
    getAllItems('users', {
        useremail: req.headers.useremail,
        password: req.headers.password
    }).then(u => {
        //if user exists
        if (u != null && u.length > 0) {
            // go and execute the request
            next()
        } else {
            //send dummy response
            res.json(generateJsonMessage("Un Authorized"))
        }
    })
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