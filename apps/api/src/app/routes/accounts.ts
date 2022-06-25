import { Account as IAccount } from '@cefwm-angular/common';
import { getCollection } from '../util/mongodb';
import { NextFunction, Response, Request, Router } from 'express';

export const router: Router = Router();

router.get(
  '/:userId',
  async (req: Request, res: Response, next: NextFunction) => {
    const _id: number = Number(req.params.userId);
    const accounts: IAccount[] = await getCollection<IAccount>(
      req.app,
      'accounts'
    )
      .find({
        userId: _id,
      })
      .toArray();
    res.json(accounts);
  }
);

router.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = Number(req.params._id);
  const account = (await getCollection<IAccount>(req.app, 'accounts').findOne({
    _id: _id,
  })) as IAccount;
  res.json(account);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const body: IAccount = req.body;
  const results = await getCollection<IAccount>(req.app, 'accounts').insertOne(
    body
  );

  res.json(results);
});
