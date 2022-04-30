const routes = require('express').Router();

routes.get('/', (req, res) => {
    //res.send('Hello, Contacts!');

    //const dotenv = require('dotenv');
    //dotenv.config();

    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://kimlah:KyWyWhit2012!@cluster0.1s3nr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("contacts");
        dbo.collection("contacts").find().toArray(function(err, result) {
            if (err) throw err;
            // logs to console
            console.log(result);
            // sends to browser as json
            //res.json(result);
            db.close()
        });
    });
  });

module.exports = routes;