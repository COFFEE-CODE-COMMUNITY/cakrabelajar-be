import Joi from "joi";

const register = Joi.object({
    fullname : Joi.string().max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(32).required()
})

const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(32).required()
})

export default {
    register,
    login
}