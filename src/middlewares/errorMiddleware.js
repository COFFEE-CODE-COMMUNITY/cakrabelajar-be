import { ResponseError } from "../exceptions/responseError.js";

const errorMiddleware = async (err, req, res, next) => {
    console.info(`Error : ${err}`);
    if(!err) {
        next()
    }

    if(err instanceof ResponseError){
        res.status(err.status).json({
            errors: err.message
        }).end();
    } else {
        res.status(500).json({
            errors: err.message
        }).end()
    }
}

export default errorMiddleware