const {
    MongoClient,
    ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('\n\ncannot able to connect with the mongodb database');
    console.log('\n\nsuccessfully connected to the mongodb server');

    db = client.db('TodoApp');
    // db.collection('Users').deleteMany({name: "bhupender singh"}).then((res) => console.log(res));

    // db.findOneAndDelete({completed: false}).then((res) => console.log(res));

    // db = client.db('TodoAp').collection('Todos');

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b6bed7762a4e01a20cd6716')
    }).then((res) => console.log(res));
    // db.collection('Users').deleteMany({name: 'test'}).then((res) => console.log(res.result));

    client.close();
});