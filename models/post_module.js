const mongoose = require('mongoose');

const schema = mongoose.Schema;

const PostSchema = schema({
    name: {
        require: true,
        type: String
    },
    message:{
        require:true,
        type:String
    },
    bloodgroup: {
        require: true,
        type: String,
        enum: ["A Positive", "B Positive", "O Positive", "A Negative", "B Negative", "O Negative", "AB Negative", "AB Positive"]
    },
    unitrequired: {
        require: true,
        type: Number
    },
    urgency: {
        type: String
    },
    country: {
        require: true,
        type: String
    },
    state: {
        require: true,
        type: String
    },
    city: {
        require: true,
        type: String
    },
    hospital: {
        require: true,
        type: String
    },
    relationpatient: {
        require: true,
        type: String
    },
    additioninst: {
        require: true,
        type: String
    },
    postdate: {
        default: Date.now(),
        type: Date
    },
    contantNo: {
        require: true,
        type: String
    },
    comment: [{
        name: {
            require: true,
            type: String
        },
        message: {
            require: true,
            type: String
        },
        sendid: {
            type: String,
            require: true
        }
    }],
    volunteers: [{
        name: {
            require: true,
            type:String
        },
        bloodgroup: {
            require: true,
            type: String,
            enum: ["A Positive", "B Positive", "O Positive", "A Negative", "B Negative", "O Negative", "AB Negative", "AB Positive"]
        },
        exchangedo:{
            require:true,
            type:String,
            default:'Not Donated',
            enum:['Donated','Not Donated']
        },
        volid:{
            type: String,
        }
    }],
    userid: {
        type: String,
       
    },
});
module.exports = mongoose.model('post', PostSchema);