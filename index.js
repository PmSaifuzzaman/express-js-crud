const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors());
app.use(express.json());

// {// pmsaifuzzaman
// Bh3e47dc0qGHRvAD}



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pmsaifuzzaman:Bh3e47dc0qGHRvAD@cluster0.ublbqgg.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // MongoDB Sending Data
    const database = client.db("insertUserDB");
    const userCollection = database.collection("users");


    app.post('/users', async(req, res) => {
      const user = req.body;
      console.log('new user created',user)
      // mongo db
      const result = await userCollection.insertOne(user);
      res.send(result)

    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('CRUD server is running')
})

app.listen(port, () => {
  console.log(`CRUD is running on port ${port}`)
})