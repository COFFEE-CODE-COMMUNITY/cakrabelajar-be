import pool from "../../config/db.js";

const query = (config) => {
    return pool.query(config)
}

const getClient = async () => {
    const client = await pool.connect()

    const query = client.query;
    const release = client.release

    const setTimeout = (() => {
        console.info('Client dipinjam lebih dari 5 detik');
        console.info(`Query terakhir: ${client.lastQuery}`);
    }, 5000);

    client.query = (...args) => {
        client.lastQuery = args;
        return query.apply(client, args);
    }

    client.release = () => {
        clearTimeout(setTimeout);
        client.query = query;
        client.release = release;
        return release.apply(client)
    }

    return client;
}


const withTransaction = async (callback) => {
    const client = await getClient()
    try {
        await client.query('BEGIN');
        const result = await callback(client);
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        throw error
    } finally {
        client.release()
    }
}

export default {
    getClient,
    query,
    withTransaction
}