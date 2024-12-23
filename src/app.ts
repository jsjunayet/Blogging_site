import express from 'express';
import router from './app/router/router';
import { globalMiddleWare } from './app/middleware/globalMiddleware';

const app = express();
app.use(express.json());
app.use('/api', router);
app.use(globalMiddleWare);

export default app;
