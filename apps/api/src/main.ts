import * as express from 'express';
import { MongoClient } from 'mongodb';
import { router as accountsRoute } from './app/routes/accounts';

MongoClient.connect('mongodb://accounts-pr_devcontainer_db_1')
  .then((client: MongoClient) => {
    app.locals.db = client.db('app-accounts');
    console.log('    Conectado ao MongoDB.');
  })
  .catch((err) => {
    console.error('    Erro ao conectar ao MongoDB', err);
  });

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/accounts', accountsRoute);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
