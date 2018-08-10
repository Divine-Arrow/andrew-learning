const {MongoClient} = require('mongodb');

var obj = {name: 'Bhupender', age: 21};

const {name} = obj;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) return console.log('\n\ncannot able to connect with the mongodb database');
    console.log('\n\nsuccessfully connected to the mongodb server');
    db = client.db('TodoApp');
    /* db.collection('Todos').insertOne({
        one: 'some data',
        two: 'emailid'
    }, (err, result) => {
        if (err)
            return console.log('cannot add to database ', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

    /* db.collection('Users').insertOne({
        name: 'bhupender singh',
        age: 21,
        location: 'New Delhi, India'
    }, (err, result) => {
        if(err) return console.log('cannot able to add in Users', err)
        // console.log(JSON.stringify(result.ops, undefined, 2))
        console.log(result.ops[0]._id.getTimestamp());
    }); */
    client.close();
});