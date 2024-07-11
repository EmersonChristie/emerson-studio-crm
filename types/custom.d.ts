// custom.d.ts
import { Request } from 'express';
import { SafeUser } from '../src/api/user/userModel';

declare module 'express-serve-static-core' {
  interface Request {
    user?: SafeUser;
  }
}
