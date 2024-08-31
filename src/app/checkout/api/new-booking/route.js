import { connectDB } from "@/lib/connectDB"

export const POST = async(request)=>{
    const newBooking = await request.json();
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");
    
    console.log(newBooking);

    try{
        const res = await bookingsCollection.insertOne(newBooking);
        return Response.json({message: "Booked Successfully"},{status:200});
    }catch(error){
        return Response.json({message: "Somthing is wrong"}, {status:400});
    }
    
};