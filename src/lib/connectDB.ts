const { MongoClient, ServerApiVersion } = require('mongodb');
let db: any;
export const connectDB = async () => {
    if (db) return db;
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = db.client('car-doctor');
        return db;
    }
    catch {
       console.log()
    }
}