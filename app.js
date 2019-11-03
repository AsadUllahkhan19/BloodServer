var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter=require('./routes/user');
const postRouter=require("./routes/Post");
const CommentRouter=require('./routes/comment')
var app = express();
// express use functions
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/bloodbank', {useNewUrlParser: true}).then(() => {
    console.log('db connected');
}).catch((err) => {
    console.log(err);
});
app.get ('/',(req,res)=>{
    res.send("hi")
})

app.use('/users', usersRouter);
app.use('/post', postRouter);
app.use('/comment', CommentRouter);

app.listen("5000",()=>{
    console.log("start")
})
