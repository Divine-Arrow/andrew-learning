const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if (process.env.MONGODB_URI) {
    console.log(process.env.MONGODB_URI);
    /* mongoose.connect(process.env.MONGODB_URI, {
            auth: {
                user: 'todouser',
                password: 'mmm&07W7m'
            }
        })
        .then(() => console.log('connection successful'))
        .catch((err) => console.error(err)); */
} else {
    mongoose.connect('mongodb://localhost:27017/TodoApp')
}



module.exports = {mongoose}