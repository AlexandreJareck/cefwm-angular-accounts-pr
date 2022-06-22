import { getCollection } from '../util/mongodb';
import { NextFunction, Response, Request, Router } from 'express';
import { User as IUser } from '@cefwm-angular/common';

export const router: Router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const body: { username: string; password: string } = req.body;
  const result = await getCollection<IUser>(req.app, 'users').findOne({
    username: body.username,
    password: body.password,
  });

  res.json(result);
});
