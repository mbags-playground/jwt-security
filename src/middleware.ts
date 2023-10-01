import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET, API_RESPONSE_MESSAGES } from '@/constants';
import jwt from 'jsonwebtoken';
export const IsNotGuest = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: API_RESPONSE_MESSAGES.UNAUTHORIZED_MESSAGE });
  try {
    const payload = await jwt.verify(token, JWT_SECRET);
    req.user = payload as User;
    if (payload) return next();
  } catch (error) {
    return res.status(200).json({ message: API_RESPONSE_MESSAGES.UNAUTHORIZED_MESSAGE });
  }
};
