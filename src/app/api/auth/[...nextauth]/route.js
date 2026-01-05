import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { z } from "zod";
import connectToDb from "../../../../../database/db";
import UserModel from "../../../../../schema/user/user";
import {
  confirmPasswordHashed,
  hashedPassword,
} from "../../../../../utils/auth";

const signupSchema = z.object({
  email: z.string().email("ایمیل معتبر نیست").min(12),
  password: z.string().min(8, "گذرواژه باید حداقل 8 کاراکتر باشد"),
});

export const authOptions = {
  session: { strategy: "jwt" },

  providers: [
    //  LOGIN
    CredentialsProvider({
      id: "credentials-login",
      name: "Credentials Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDb();

        const user = await UserModel.findOne({
          email: credentials?.email,
          isActive: true,
        }).select("+password");

        if (!user) return null;

        const ok = await confirmPasswordHashed(
          credentials.password,
          user.password
        );
        if (!ok) return null;

        return { id: user._id.toString(), email: user.email, role: user.role };
      },
    }),

    //  SIGNUP
    CredentialsProvider({
      id: "credentials-signup",
      name: "Credentials Signup",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDb();

        const parsed = signupSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        const exists = await UserModel.findOne({ email });
        if (exists) return null;

        const user = await UserModel.create({
          email,
          password: hashedPassword(password),
          role: "CUSTOMER",
          isActive: true,
        });

        // ✅ return user (auto-login)
        return { id: user._id.toString(), email: user.email, role: user.role };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },

  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
