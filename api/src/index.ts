import express, { Express, Request, Response, Application, NextFunction } from 'express';
import dotenv from 'dotenv';
import allowCorsDomain from './middleware/corsMiddleware';
import { MainRouter } from './routes';

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use(allowCorsDomain);

app.use('/api', MainRouter);

// Temp
app.get('/', (req: Request, res: Response) => {
  res.status(200).json('Express + TypeScript Server');
});

// Start the server
app.listen(port, () => {
  console.log(`[server]: Price Chart API is running at https://localhost:${port}`);
});
