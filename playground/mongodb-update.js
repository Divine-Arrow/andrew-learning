const {
    MongoClient,
    ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('\n\ncannot able to connect with the mongodb database');
    console.log('\n\nsuccessfully connected to the mongodb server');

    db = client.db('TodoApp');
    
    /* db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b6ddc709f519f3285ad5573')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => console.log(result)); */

    db.collection('Users').findOneAndUpdate({name: 'Divine Arrow'}, {$inc: {age: 1}}, {returnOriginal: false}).then((result) => console.log(result));

    client.close();
});