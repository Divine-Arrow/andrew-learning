const {
    MongoClient
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('\n\ncannot able to connect with the mongodb database');
    console.log('\n\nsuccessfully connected to the mongodb server');
    db = client.db('TodoApp');

    /* db.collection('Todos').find({
        completed: false
    }).count().then((count) => {
        console.log(`The count is : ${count}`);
    }, (err) => {
        console.log('Something went wrong while finding Todos', err);
    }); */

    db.collection('Users').find({
        name: 'bhupender singh'
    }).toArray().then((res) => console.log(`Found this ${JSON.stringify(res, undefined, 2)}`), (err) => console.log(err));
    client.close();
});