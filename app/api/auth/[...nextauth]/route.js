import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import client from "@/lib/mongoClient"; // MongoDB connection file

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      // First time login only
      if (user?.email) {
        // const client = await clientPromise;
        const db = client.db("NextInvManager");
        const existingUser = await db
          .collection("Users")
          .findOne({ email: user.email });

        if (!existingUser) {
          await db.collection("Users").insertOne({
            name: user.name || "",
            email: user.email,
            image: user.image || "",
            role: "user", // default role
            createdAt: new Date(),
          });
        }

        token.role = existingUser?.role || "user";
      }

      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
