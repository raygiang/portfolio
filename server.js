require('dotenv').config();

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const fs = require('fs');

// Mongo Atlas Connection
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@testcluster-t9ymi.mongodb.net/test?retryWrites=true`;
const client = new MongoClient(uri, { useNewUrlParser: true });
let collection;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5002;

// Connect to the portfolio database
client.connect(err => {
    collection = client.db("portfolio").collection("projects");
});

app.get('/getProjects', async (req, res) => {
    let projectList = [];

    let result = await collection.find().forEach((document) => {
        projectList.push(document);
    });

    res.send({projects: projectList});
});

process.on('SIGINT', function() {
    client.close();
});

// https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));