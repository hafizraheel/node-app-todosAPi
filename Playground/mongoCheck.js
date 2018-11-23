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
    const db = client.db('TodoApp')

    db.collection('Todos').insertOne( {
        name:'zain',
        age:22,
        location :'Krl colony'
    },(err,result)=> {
        if(err) {
            return console.log('unable to insert to todos', err)
        }

        console.log(JSON.stringify(result.ops, undefined,2))
    });

    db.collection('Todos1').insertOne( {
        name:'subhan',
        age:8,
        location:'Allama Iqbal blocks'
    }, (err,result)=> {
        if(err) {
            return  console.log("data not inserted in todos",err);
        } else {
            console.log(JSON.stringify(result.ops,undefined,3));
        }
    })

    client.close();
});