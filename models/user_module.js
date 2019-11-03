const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = schema({
    firstname:{require:true,type:String},
    lastname: {require: true, type: String},
    email: {require: true, type: String},
    bloodgroup:{require:true,type:String,enum:["A Positive","B Positive","O Positive","A Negative","B Negative","O Negative","AB Negative","AB Positive"]},
    password: {require: true, type: String},
});

module.exports = mongoose.model('user', userSchema);
