import { Validations } from "../../validator.js";

export const userValidations = {
    "useremail": [Validations.required],
    "username": [Validations.required],
    "password": [Validations.required]
}