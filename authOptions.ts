import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import  from "next-auth/providers/github";P

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || ("" as string),
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ("" as string),
    }),
    // ...add more providers here
  ],
} satisfies NextAuthOptions;

// export default NextAuth(authOptions);
