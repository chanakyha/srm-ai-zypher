import { db } from "@/backend/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async signIn({ profile }) {
      const docRef = doc(db, "users", profile?.email!);
      const currentUser = await getDoc(docRef);
      console.log(currentUser.data());
      if (currentUser?.data()?.registered) {
        return true;
      } else {
        await setDoc(
          docRef,
          { ...profile, registered: false },
          { merge: true }
        );
      }
      return true;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
