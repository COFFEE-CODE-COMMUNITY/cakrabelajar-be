import authService from "../services/authService.js";

const register = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await authService.register(request);
        res.status(201).json({
            message : "Success Register",
            data: {
                token: result
            }
        })
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const request = req.body
        const result = await authService.login(request)
        res.status(200).json({
            message : "Login Success",
            data: {
                token: result
            }
        })
    } catch (error) {
        next(error)
    }
}

export default {
    register,
    login
}