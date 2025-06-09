import pgClient from "../db/postgre/pgClient.js";
import { ResponseError } from "../exceptions/responseError.js";
import userRepository from "../repositories/userRepository.js";
import userValidation from "../validators/userValidation.js";
import validate from "../validators/validate.js";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import config from "../config/index.js";
import jwt from "../utils/jwt.js";

const register = async (payload) => {
    const user = validate(userValidation.register, payload);

    const client = await pgClient.getClient()

    const isEmailTaken = await userRepository.findUserByEmail(user.email, client)

    if (isEmailTaken) {
        throw new ResponseError(409, 'Email already exists')
    }
    
    user.id = uuid()
    user.password = await bcrypt.hash(user.password, config.bcryptSalt)

    await userRepository.createUser(user, client)
    client.release()
    
    const payloadJwt = {
        id : user.id
    }

    return jwt.signToken(payloadJwt)
}

const login = async (payload) => {
    const userPayload = validate(userValidation.login, payload);
    const client = await pgClient.getClient();

    try {
        const user = await userRepository.getUserByEmail(userPayload.email, client);
        if (user < 1 || user[0].email != userPayload.email) {
            throw new ResponseError(404, 'Email or password is wrong')
        }
    
        const passwordValid = await bcrypt.compare(userPayload.password, user[0].password);
        if (!passwordValid) {
            throw new ResponseError(404, 'Email or password is wrong')
        }
    
        const jwtPayload = {
            id : user[0].id
        }
    
        const token = jwt.signToken(jwtPayload);
    
        return token

    } finally {
        client.release()
    }


}


export default {
    register,
    login
}