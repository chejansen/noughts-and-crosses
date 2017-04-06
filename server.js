import path from 'path';
import express from 'express';
import middleware from './src/middleware';
import {loadDevEnvironment} from './lib/environment-helpers'
import {handleError} from './lib/utils'

const app = express();
const port = process.env.PORT;

if (process.env.NODE_ENV === 'development')
  loadDevEnvironment(app)

app.use(express.static(path.resolve(__dirname, process.env.SRC)));
app.get('*', middleware);

app.listen(port, '0.0.0.0', err => {
  if(err) handleError('Error Starting Server', err)
  else console.info(`Listening at http://localhost:${port}`);
});
