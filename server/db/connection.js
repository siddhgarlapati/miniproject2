const mongoose = require('mongoose');

const conn = mongoose.connect("mongodb://127.0.0.1:27017/expense-tracker", { 
    useNewUrlParser: true,
     useUnifiedTopology: true,
       })         
    .then(db => {
        console.log("Databse Connected");
        return db;
    }).catch(err => {
        console.log("Connection Error: " + err);
    })

    module.exports = conn;