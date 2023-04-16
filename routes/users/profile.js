import { Router } from "express";
import { generateJsonMessage } from "../../commonHttpMessages.js"
import { getAllItems, updateObjByFieldSingleItem, updateObjByFieldMultipleItem } from "../../mongo-db-utillities.js";
import jwt from 'jsonwebtoken'
import { ObjectId } from "mongodb";
import { User } from "../../Model/userModel.js";
const profileRoutes = Router();

// Get user detail
profileRoutes.get('', async (req, res) => {

    let obj = {
        _id: new ObjectId(req.query.id)
    }

    const user = await getAllItems(User, obj)
    if (user) {
        let token = jwt.sign(obj, process.env.SECRETE_KEY, { expiresIn: process.env.TOKEN_EXPIRES_IN })
        return res.json({ user: user })
    }

})

// Update user liked movies
profileRoutes.put('/likes', (req, res) => {
    const id = req.query.id;
    const field = req.query.field;
    const newVal = req.body;

    updateObjByFieldSingleItem(User, id, field, newVal)
        .then(x => {
            res.json(generateJsonMessage("updated successfully"))
        })
})

// Update user disliked movies
profileRoutes.put('/dislikes', (req, res) => {
    const id = req.query.id;
    const field = req.query.field;
    const newVal = req.body;

    updateObjByFieldSingleItem(User, id, field, newVal)
        .then(x => {
            res.json(generateJsonMessage("updated successfully"))
        })
})

// Update user mylist movies
profileRoutes.put('/mylist', (req, res) => {
    const id = req.query.id;
    const field = req.query.field;
    const newVal = req.body;

    updateObjByFieldSingleItem(User, id, field, newVal)
        .then(x => {
            res.json(generateJsonMessage("updated successfully"))
        })
})

// Update user plan & payment method
profileRoutes.put('/planpayment', (req, res) => {
    const id = req.query.id;
    const obj = req.body;

    const query = { "plan": obj.plan, "paymentmethod": obj.paymentmethod };

    updateObjByFieldMultipleItem(User, id, query)
        .then(x => {
            res.json(generateJsonMessage("updated successfully"))
        })
})

export default profileRoutes



