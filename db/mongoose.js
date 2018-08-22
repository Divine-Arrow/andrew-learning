const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp')
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));;

module.exports = {
    mongoose
}