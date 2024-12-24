import express from 'express';
import router from './app/router/router';
import { globalMiddleWare } from './app/middleware/globalMiddleware';
import notFound from './app/middleware/noFound';

const app = express();
app.use(express.json());
app.use('/api', router);
app.use(notFound)
app.use(globalMiddleWare);

export default app;
