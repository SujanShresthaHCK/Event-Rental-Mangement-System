const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let hallsCollection;

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('your_database_name');
        hallsCollection = database.collection('halls');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Connect to the database
connectToDatabase();

// Routes

// Get all halls
app.get('/halls', async (req, res) => {
    try {
        const halls = await hallsCollection.find({}).toArray();
        res.json(halls);
    } catch (error) {
        console.error('Error fetching halls:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add a new hall
app.post('/halls', async (req, res) => {
    try {
        const newHall = req.body;
        const result = await hallsCollection.insertOne(newHall);
        res.status(201).json(result.ops[0]);
    } catch (error) {
        console.error('Error adding hall:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a hall
app.put('/halls/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedHall = req.body;
        const result = await hallsCollection.updateOne({ _id: ObjectId(id) }, { $set: updatedHall });
        res.json({ message: 'Hall updated successfully' });
    } catch (error) {
        console.error('Error updating hall:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Remove a hall
app.delete('/halls/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await hallsCollection.deleteOne({ _id: ObjectId(id) });
        res.json({ message: 'Hall removed successfully' });
    } catch (error) {
        console.error('Error removing hall:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
