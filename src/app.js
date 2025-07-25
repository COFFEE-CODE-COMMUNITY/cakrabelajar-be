import express from 'express';
import morgan from 'morgan';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import helmet from 'helmet';
import cors from 'cors';

const createApp = () => {
    const app = express();

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(morgan("dev"));
    app.use(helmet());
    app.use(cors());

    // Routes
    app.use('/api', routes);

    // Error Handling
    app.use(errorMiddleware);

    return app
}

export default createApp