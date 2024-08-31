import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings')
    try {
        const res = await bookingsCollection.deleteOne({ _id: new ObjectId(params.id) });
        return Response.json({ message: 'booking deleted', response: res });
    } catch (error) {
        return Response.json({ message: 'something is worng' });
    }
}

export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings')
    try {
        const data = await bookingsCollection.findOne({ _id: new ObjectId(params.id) });
        return Response.json({ message: "booking found", response: data });
    } catch (error) {
        return Response.json({ message: 'something is worng' });
    }
}

export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings');
    const { date, phone, address } = await request.json();
    try {
        const res = await bookingsCollection.updateOne(
            { _id: new ObjectId(params.id) }, {
            $set: {
                date,
                phone,
                address
            },
        }, {
            upsert: true
        });

        return Response.json({ message: 'booking Updated', response: res });
    } catch (error) {
        return Response.json({ message: 'something is worng' });
    }
}
