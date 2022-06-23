import * as express from 'express';
import { MongoClient } from 'mongodb';
import { router as accountsRoute } from './app/routes/accounts';
import { router as authRoute } from './app/routes/auth';
import * as cors from 'cors';
import { json } from 'body-parser';
import { requireJwtToken } from './app/middlewares/jwt';

MongoClient.connect('mongodb://accounts-pr_devcontainer_db_1')
  .then((client: MongoClient) => {
    app.locals.db = client.db('app-accounts');
    console.log('    Conectado ao MongoDB.');
  })
  .catch((err) => {
    console.error('    Erro ao conectar ao MongoDB', err);
  });

const app = express();

app.use(cors());
app.use(json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/auth', authRoute);

app.use(requireJwtToken);

app.use('/api/accounts', accountsRoute);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
