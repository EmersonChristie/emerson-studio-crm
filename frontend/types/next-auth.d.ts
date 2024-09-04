import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      token: string;
    } & DefaultSession['user'];
    accessToken: string;
  }

  interface User {
    token: string;
  }

  interface CredentialsInputs {
    email: string;
    password: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    name: string;
    email: string;
    accessToken: string;
  }
}
