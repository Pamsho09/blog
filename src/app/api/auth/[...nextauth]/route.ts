import { UserService } from "@/services/UserService";
import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import PrismaService from "@/services/PrismaService";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials", credentials)
        if (typeof credentials !== "undefined") {
          
          const userService = new UserService();

          const res = await userService.verifyUser(credentials);
          console.log("res", res)
          if (typeof res !== "undefined") {
            return { ...res.user };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    error: "/auth/error",
    signIn: "/kitchen",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(PrismaService),
  session: { strategy: "jwt" },
  jwt: {
    secret: "secret",
  },
  secret: "secret",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
