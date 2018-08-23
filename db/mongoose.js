const mongoose = require('mongoose');
var uriString = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'

mongoose.Promise = global.Promise;


mongoose.connect(uriString)
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

module.exports = {
    mongoose
}