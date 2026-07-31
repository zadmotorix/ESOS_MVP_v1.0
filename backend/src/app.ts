import express from 'express';
import {registerRoutes} from './routes';

import errorHandler from './middleware/errorHandler';
import notFound from './middleware/notFound';

const app = express();
app.use(express.json());

registerRoutes(app);

app.use(notFound);
app.use(errorHandler);

export default app;
