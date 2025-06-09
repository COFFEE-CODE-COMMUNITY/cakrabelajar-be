import jwt from "../utils/jwt.js";

const authMiddleware = async (req, res, next) => {
    // console.info(`data header : ${ JSON.stringify(req.headers)}`);
    const { authorization } = req.headers
    console.warn(authorization);
    if(!authorization.startsWith('Bearer ')) {
        res.status(401).json({
            errors: "Unauthorized"
        })
    }

    const token = authorization.split(" ")[1];
    try {
        const jwtDecode = jwt.verifyToken(token);
        req.user = jwtDecode;
        next()
    } catch (error) {
        res.status(401).json({
            errors: "Unauthorized"
        })
    }
}

export default authMiddleware