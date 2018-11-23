//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

const id = new ObjectID();
console.log(id);
const users = {name: 'zain', age: 23};
var {name} =users;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=> {
   
    if(err) {
        return console.log("Unable to connect to the MongoDb server ");
    }
    console.log("successfully connected to the mmongoDB server");
    const db = client.db('TodoApp');
    // db.collection('Todos').find({name: 'subhan'}).toArray().then((check)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(check,undefined,3));
    // });

    db.collection('Todos').find({
        _id : new ObjectID('5bf7acb91d5fda2b5814f04e')
    }).toArray().then((body)=> {
        console.log(JSON.stringify(body,undefined,2));
    });

    // db.collection('Todos').find().count().then((count)=> {
    //     console.log(`total number of collection are ${count}`);
    // });
    client.close();
});