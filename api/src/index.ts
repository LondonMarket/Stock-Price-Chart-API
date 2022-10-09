import express, { Express, Request, Response, Application, NextFunction } from 'express';
import dotenv from 'dotenv';
import allowCorsDomain from './middleware/corsMiddleware';
import { MainRouter } from './routes';

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use(allowCorsDomain);

app.use('/api', MainRouter);

app.get('/healthcheck', (req: Request, res: Response) => {
  const statusCode = 200;
  res.status(statusCode).json({
    response: statusCode,
    message: "OK"
  });
});

// Start the server
app.listen(port, () => {
  console.log(`[server]: Price Chart API is running at https://localhost:${port}`);
});
