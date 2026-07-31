import express from 'express';
import path from 'path';
import {registerRoutes} from './routes';

import errorHandler from './middleware/errorHandler';
import notFound from './middleware/notFound';

const app = express();
const distRoot = path.resolve(process.cwd(), 'dist');

app.use(express.json());
app.use(express.static(distRoot));

app.get('/',(_req,res)=>{
  res.sendFile(path.resolve(distRoot, 'index.html'));
});

registerRoutes(app);

app.use(notFound);
app.use(errorHandler);

export default app;
