import { getCollection } from '../util/mongodb';
import { NextFunction, Response, Request, Router } from 'express';
import { User as IUser } from '@cefwm-angular/common';
import * as jsonWebToken from 'jsonwebtoken';

export const router: Router = Router();
export const JWT_SECRET_KEY =
  '6f3929fbea64209846881c3bdd1d68ed8ee87ac42bfe31148f6f210f0f33c697';

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const body: { username: string; password: string } = req.body;
  const result = await getCollection<IUser>(req.app, 'users').findOne({
    username: body.username,
    password: body.password,
  });
  if (result) {
    delete result.password;
    res.json({
      ...result,
      token: jsonWebToken.sign(result, JWT_SECRET_KEY, {
        expiresIn: '10000m',
      }),
    });
  } else {
    res.status(401).send();
  }
});
