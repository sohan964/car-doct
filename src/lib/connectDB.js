const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
let db;

export const connectDB = async() =>{
    if(db) return db;
    try{
        const uri = 'mongodb://localhost:27017/';
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db('car-doc');
        return db;
    }catch(error){
        console.log(error);
    }
}