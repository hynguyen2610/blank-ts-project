import express from 'express';
import bodyParser from 'body-parser';
import { queueRouter as queueRouter } from './routes/queueRouter';

const app = express();
const port = 9500;

app.use(bodyParser.json());

app.use('/queue', queueRouter);

// Start the server
app.listen(port, () => {
  console.log(`Heave Request Server running at http://localhost:${port}`);
});
