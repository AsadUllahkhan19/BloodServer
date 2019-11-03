const express = require('express');
const {
	varifyjwt
} = require('../core/jwtfunction');
const users = require('../models/user_module');
const post = require('../models/post_module');
const route = express.Router();

route.post('/send', (req, res, next) => {
	users.findOne({
		email: req.body.email
	}, (err, data) => {
		if (!data) {
			console.log('user not found');
			return res.status(422).json({
				success: false,
				message: 'user not found'
			});
		} else {
			const newPost = post({
				message: req.body.message,
				name: data.firstname,
				bloodgroup: req.body.bloodgroup,
				unitrequired: req.body.unitrequired,
				urgency: req.body.urgency,
				country: req.body.country,
				state: req.body.state,
				city: req.body.city,
				hospital: req.body.hospital,
				relationpatient: req.body.relationpatient,
				additioninst: req.body.additioninst,
				contantNo: req.body.contantNo,
				userid: data.id
			});

			newPost.save().then(() => {
				return res.status(200).json({
					success: true,
					message: 'post save'
				});
			});
		}
	});
});

route.get('/', (req, res, next) => {


	post
		.find({})
		.sort('-postdate')
		.skip(0)
		.limit(0)
		.exec((err, data) => {
			res.status(200).json({
				success: true,
				data: data,
				usernmae: req.body.name
			});
		});
});

module.exports = route;