
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt';
import { connectDB } from "@/lib/connectDB";

const handler = NextAuth({
    secret: "dafksdfaklsdfalkdflkasdfasdfasdf",
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }

                const db =  await connectDB();
                const currentUser = await db.collection("users").findOne({ email });
                //console.log(currentUser);

                if (!currentUser) {
                    return null;
                }

                //checking password by bcrypt
                const passwordMathed = bcrypt.compareSync(password, currentUser.password);
                if (!passwordMathed) return null;

                return currentUser;
            }
        })
    ],
    callbacks: {},
    pages: {
        signIn: '/login'
    },
})

export { handler as GET, handler as POST }