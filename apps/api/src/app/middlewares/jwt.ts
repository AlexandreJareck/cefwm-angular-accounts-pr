import * as expressJwt from 'express-jwt';

import { JWT_SECRET_KEY } from '../routes/auth';

export const requireJwtToken = expressJwt({
  secret: JWT_SECRET_KEY,
  algorithms: ['HS256'],
});
