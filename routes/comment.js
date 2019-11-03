const router = require("express").Router();
const post = require('../models/post_module');


router.post('/send', (req, res) => {
    post.findOne({ _id: req.body.id}, (err, data) => {
        comm=data.comment;
        comm.push({
            name:req.body.name,
            message:req.body.message,
            sendid:req.body.id
        });
        data.comment=comm;
        data.save().then(()=>{
            res.send("gon")
        });
    });
});



router.post('/volenter', (req, res) => {
    post.findOne({ _id: req.body.id}, (err, data) => {
        comm=data.volunteers;
        comm.push({
            name:req.body.name,
            bloodgroup:req.body.bloodgroup,
            volid:req.body. volid
        });
        data.volunteers=comm;
        data.save().then(()=>{
            res.send("gon")
        });
    });
});


router.post('/volenterset', (req, res) => {
    post.findOne({ _id: req.body.id}, (err, data) => {
        comm=data.volunteers;
        index=comm.findIndex(obj=>obj.name==req.body.name);
        if(index!=null){
            comm[index].exchangedo='Donated';
            data.volunteers=comm;
            data.unitrequired=data.unitrequired-1;
            data.save().then(()=>{
                res.send("gon")
            });
        }else{
            res.send("no id");
        }
        
    });
});



module.exports=router;