export const HOSTNAME = process.env.HOST ?? '127.0.0.1';
export const JWT_SECRET = process.env.JWT_SECRET ?? 'secret';
export const PORT = process.env.PORT ?? 3000;
export const API_RESPONSE_MESSAGES = {
  UNAUTHORIZED_MESSAGE: 'Who told you that I like guest?.  You are unauthorized',
  WELCOME_MESSAGE: 'You are welcome',
};
