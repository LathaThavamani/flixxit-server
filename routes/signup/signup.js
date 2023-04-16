import { Router } from "express";
import { createItem, getAllItems } from "../../mongo-db-utillities.js";
import { validateBody } from "../../validator.js";
import { generateJsonMessage } from "../../commonHttpMessages.js";
import { User } from "../../Model/userModel.js";
const signupRoutes = Router();

// Create user account if not exists already
signupRoutes.post('',
    async (req, res) => {
        let obj = req.body;
        const user = await getAllItems(User, { useremail: obj.useremail })
        if (user) {
            res.status(400).json(generateJsonMessage("flixxit account with this email is already exists"))
        } else {
            createItem(User, obj).then(x => {
                return res.json(generateJsonMessage("created"))
            })
        }

    })

export default signupRoutes

