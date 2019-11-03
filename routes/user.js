const route = require('express').Router();
const user = require('../models/user_module');
const bcrypt = require('bcrypt');
const {
	validatesignin,
	validatesignup
} = require('../validation/uservalidation');

route.post('/signup', (req, res) => {
	user.findOne({ email: req.body.email }, (err, data) => {
		if (data) {
			return res.status(422).json({
				message: 'user exist',
				success: false
			});
		} else {
			bcrypt.genSalt(5, (err, salt) => {
				bcrypt.hash(req.body.password, salt, (err, hash) => {
					const newuser = user({
						firstname: req.body.firstname,
						lastname:req.body.lastname,
						bloodgroup:req.body.bloodgroup,
						email: req.body.email,
						password: hash
					});
					newuser.save().then(data => {
						return res.status(200).json({
							username: data.username,
							email: data.email,
							success: true,
						});
					});
				});
			});
		}
	});
});

route.post('/signin', validatesignin, (req, res, next) => {
	console.log(req.body.email);
	user.findOne({ email: req.body.email }, (err, data) => {
		if (!data) {
			return res.status(422).json({
				message: 'user not exist',
				success: false
			});
		} else {
			bcrypt.compare(req.body.password, data.password, (err, result) => {
				if (result) {
					return res.status(200).json({
						username: data.username,
						email: data.email,
						success: true
					});
				}
			});
		}
	});
});

module.exports = route;
