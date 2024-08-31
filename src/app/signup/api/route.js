import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection('users');
        const exist = await userCollection.findOne({ email: newUser.email });
        if (exist) { return Response.json({ message: "user exist" }, { status: 304 }) }
        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const res = await userCollection.insertOne({...newUser, password:hashPassword});
       
        return Response.json({ message: "user created" }, { status: 200 })
    } catch (error) {
        Response.json({ message: error.message }, { status: 500 })

    }
}