import {MongoClient} from 'mongodb'


const URI = "mongodb://localhost:27017"
const DB_NAME = 
let client

async function connect(uri) {
    try {
        if (client) return client

        client = new MongoClient(uri, {
            useUnifiedTopology: true
        });
        await client.connect();
    } catch(err) {
        console.log(err)
    }
}

async function getCollection(db, colName) {
    const client = await connect(URI);
    const db = client.db(dbName);
    return db.collection(colName);
}

async function insertUser(user) {
    const collection = await getCollection(DB_NAME, "users");
    const result = await collection.insertOne(user)
    return res.insertedId
}