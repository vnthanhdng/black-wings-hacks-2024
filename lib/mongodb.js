import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
   await client.connect();
  const db = client.db('digitalGarden'); // Replace with your database name
  return { db, client };
}

export default connectToDatabase;
