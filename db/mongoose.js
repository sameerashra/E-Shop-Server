const mongoose = require('mongoose');

const getConnection = () => {
    mongoose.connect('mongodb://localhost:27017/eshop', {})
    .then(result => {
        console.log("Connected");
        connection = result;
    })
    .catch(err => {
        console.log("MongoDB connection catch block")
        console.log(err);
    });
};

let connection = getConnection();

module.exports = connection;