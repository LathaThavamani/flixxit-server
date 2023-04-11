import { Router } from "express";
import { createItem, getAllItems } from "../../mongo-db-utillities.js";
import { validateBody } from "../../validator.js";
import { userValidations } from "./userValidations.js";
import { generateJsonMessage } from "../../commonHttpMessages.js";
const signupRoutes = Router();

signupRoutes.post('',
    validateBody(userValidations),
    async (req, res) => {
        let obj = req.body;
        const users = await getAllItems('users', { useremail: obj.useremail })
        if (users.length == 0) {
            createItem('users', obj).then(x => {
                return res.json(generateJsonMessage("created"))
            })
        } else {
            res.status(400).json(generateJsonMessage("flixxit account with this email is already exists"))
        }

    })

export default signupRoutes

