var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello NodeJS from Express');
})
app.listen(3000);
console.log("My Service is listening to port 3000.");

var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/social";
var ObjectID = require('mongodb').ObjectID;


app.post('/contacts/add', function (req, res) {
    MongoClient.connect(dbUrl, function (err, db) {
        if (err) res.send(err);
        var id = new ObjectID();
        var data = req.body;
        data["_id"] = id.toHexString();
        db.collection('contacts')
            .insertOne(data, function (err, result) {
                db.close();
                if (err) res.send(err);
                res.send(result);
            });
    });
});


app.get('/contacts/getMany', function (req, res) {
    MongoClient.connect(dbUrl, function (err, db) {
        if (err) res.send(err);
        db.collection('contacts')
            .find(req.query).toArray(function (err, result) {
                db.close();
                if (err) res.send(err);
                res.send(result);
            });
    });
});

app.put('/contacts/update', function (req, res) {
    MongoClient.connect(dbUrl, function (err, db) {
        if (err) res.send(err);
        var opts = (req.body.opts ? req.body.opts : {});
        db.collection('contacts')
            .update(req.body.criteria, req.body.data, opts, function (err, result) {
                db.close();
                if (err) res.send(err);
                res.send(result);
            });
    });
});

app.delete('/contacts/delete', function (req, res) {
    MongoClient.connect(dbUrl, function (err, db) {
        if (err) res.send(err);
        db.collection('contacts')
            .remove(req.body, function (err, result) {
                db.close();
                if (err) res.send(err);
                res.send(result);
            });
    });
});