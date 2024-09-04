// import { NextAuthConfig } from 'next-auth';
// import CredentialProvider from 'next-auth/providers/credentials';
// import GithubProvider from 'next-auth/providers/github';

// const authConfig = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID ?? '',
//       clientSecret: process.env.GITHUB_SECRET ?? ''
//     }),
//     CredentialProvider({
//       credentials: {
//         email: {
//           type: 'email'
//         },
//         password: {
//           type: 'password'
//         }
//       },
//       async authorize(credentials, req) {
//         const user = {
//           id: '1',
//           name: 'John',
//           email: credentials?.email as string
//         };
//         if (user) {
//           // Any object returned will be saved in `user` property of the JWT
//           return user;
//         } else {
//           // If you return null then an error will be displayed advising the user to check their details.
//           return null;

//           // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//         }
//       }
//     })
//   ],
//   pages: {
//     signIn: '/' //sigin page
//   }
// } satisfies NextAuthConfig;

// export default authConfig;

import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import axios from 'axios';

// declare module 'next-auth' {
//   interface User {
//     token?: string;
//   }
//   interface Session {
//     accessToken?: string;
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     accessToken?: string;
//   }
// }

const authConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    }),
    CredentialProvider({
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      async authorize(credentials, req) {
        try {
          const response = await axios.post(
            'http://localhost:8080/users/login',
            {
              email: credentials.email,
              password: credentials.password
            },
            {
              withCredentials: true
            }
          );

          // console.log('Response from Login API: ', response.data);

          if (response.data.success) {
            console.log(
              'Response from Login API: ',
              response.data.responseObject
            );
            const user = response.data.responseObject;
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              token: user.token
            };
          } else {
            // If null is returned then an error will be displayed advising the user to check their details.
            // log an error occuring
            console.log('Error in Login API: ', response.data.error);
            return null;

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        } catch (error) {
          console.error('Error in Login API: ', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/' //sigin page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.accessToken = user.token;
      }
      // console.log('JWT token: ', token);
      return token;
    },
    async session({ session, token }) {
      if (!session.user.id) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      if (!session.accessToken) {
        session.accessToken = token.accessToken as string;
      }
      // console.log('Updated session:', session); // Debugging
      return session;
    }
    // async redirect({ url, baseUrl }) {
    //   if (url.startsWith(baseUrl)) {
    //     console.log('Redirecting to URL from callback:', url); // Debugging
    //     return url;
    //   }
    //   console.log('Redirecting to Base URL:', baseUrl); // Debugging
    //   return baseUrl;
    // }
  }
} satisfies NextAuthConfig;

export default authConfig;
