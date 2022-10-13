const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://admin:root@cluster0.sl2ee.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function retrieveData() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db("wedeliber-strapi");
        const collection = db.collection("products");
        // const query = { username: "admin" };
        const carts = await collection.find().toArray();
        console.log(carts);
    } catch (err) {
        console.log(err.stack);
    }
}



async function insertData() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db("wedeliber-strapi");
        const collection = db.collection("products");
        const query = {
            name: "Mango Graham Shake",
            description: "Mango Graham Shake is a delicious and refreshing drink that is perfect for the summer season. It is made with fresh mangoes, milk, and graham crackers. It is a great way to cool down on a hot day.",
        };
        const carts = await collection.insertOne(query);
        console.log(carts);

    } catch (err) {
        console.log(err.stack);
    }
}


async function updateDate() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db("wedeliber-strapi");
        const collection = db.collection("products");
        const query = { _id: ObjectId("634793a116759cc02d43a2d8") };
        const update = { $set: { name: "Mango Graham Shake with Yalukt 2" } };
        const carts = await collection.updateOne(query, update);
        console.log(carts);

    } catch (err) {
        console.log(err.stack);
    }
}



async function deleteData() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db("wedeliber-strapi");
        const collection = db.collection("products");
        const query = { _id: ObjectId("634793a116759cc02d43a2d8") };
        const carts = await collection.deleteOne(query);
        console.log(carts);

    } catch (err) {
        console.log(err.stack);
    }
}

retrieveData();