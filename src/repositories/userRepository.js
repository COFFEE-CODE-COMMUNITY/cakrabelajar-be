const createUser = async (user, dbClient) => {
    const query = {
        text: `INSERT INTO users(id, fullname, email, password) VALUES ($1, $2, $3, $4)`,
        values: [user.id, user.fullname, user.email, user.password]
    }

    await dbClient.query(query)
}

const findUserByEmail = async (email, dbClient) => {
    const query = {
        text : `SELECT email FROM users WHERE email = $1`,
        values: [email]
    }

    const result = await dbClient.query(query)
    if(result.rowCount != 0){
        return true
    } else {
        return false
    }
}

const getUserByEmail = async (email, dbClient) => {
    const query = {
        text: `SELECT id, email, password FROM users WHERE email = $1`,
        values: [email]
    }

    const result = await dbClient.query(query)
    return result.rows
}

const getUserById = async (id, dbClient) => {
    const query = {
        text: `SELECT fullname, email, school_name, grade_level, profile_image FROM users WHERE id = $1`,
        values : [id]
    }

    const result = await dbClient.query(query);

    return result.rows[0];
}


export default {
    createUser,
    findUserByEmail,
    getUserByEmail,
    getUserById
}