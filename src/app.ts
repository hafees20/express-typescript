import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import router from './routes';
import { DEFAULT, ENV } from './constants';

dotenv.config()
const app = express();

const PORT = ENV.PORT || DEFAULT.PORT;


// Body parser
app.use(bodyParser.json());

// Routes
app.use(ENV.GLOBAL_PREFIX || DEFAULT.GLOBAL_PREFIX, router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});