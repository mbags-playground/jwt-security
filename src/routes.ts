import { NextFunction, Request, Response, Router } from 'express';
import { JWT_SECRET, API_RESPONSE_MESSAGES } from '@/constants';
import jwt from 'jsonwebtoken';
import { users } from '@/users';
import { IsNotGuest } from './middleware';

const router = Router();
router.get('/', IsNotGuest, (req: Request, res: Response) => {
  res.status(200).json({ message: API_RESPONSE_MESSAGES.WELCOME_MESSAGE, data: req.user });
});

router.post('/signin', async (req, res) => {
  const body = req.body;
  if (!body.username || !body.password) {
    return res.status(401).json({ message: API_RESPONSE_MESSAGES.UNAUTHORIZED_MESSAGE });
  }
  const user = users[body.username];
  if (user.password !== body.password) res.status(401).json({ message: API_RESPONSE_MESSAGES.UNAUTHORIZED_MESSAGE });
  const payload = await jwt.sign({ username: user.username, name: user.name }, JWT_SECRET, {
    algorithm: 'HS256',
  });
  return res.status(200).json({ jwt: payload });
});
router.use('*', (req: Request, res: Response) => {
  res.status(401).json({ message: API_RESPONSE_MESSAGES.UNAUTHORIZED_MESSAGE });
});
router.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(503).json({ message: API_RESPONSE_MESSAGES.UNAUTHORIZED_MESSAGE });
});
export default router;
