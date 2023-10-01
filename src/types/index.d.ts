import { Request } from 'express';

declare global {
  export interface User {
    name?: string;
    password?: string;
    username?: string;
  }
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
