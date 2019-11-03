const validator = require('validator');

validatesignup = (req, res, next) => {
	const data = req.body;
	if (!(!!data.email && validator.isEmail(data.email))) {
		return res.status(422).json({
			err: 'email required or not valid',
			success: false
		});
	}
	if (
		!(
			!!data.firstrname &&
			validator.isByteLength(data.firstname, { min: 4, max: 10 })
		)
	) {
		return res.status(422).json({
			err: 'firstname required or should be length of 4 to 10 ',
			success: false
		});
	}
	arr=["A Positive","B Positive","O Positive","A Negative","B Negative","O Negative","AB Negative","AB Positive"];
	if (
		!(
			!!data.firstrname &&
			arr.include(data.bloodgroup)
		)
	) {
		return res.status(422).json({
			err: 'firstname required or should be length of 4 to 10 ',
			success: false
		});
	}
	if (
		!(
			!!data.lastrname &&
			validator.isByteLength(data.lastname, { min: 4, max: 10 })
		)
	) {
		return res.status(422).json({
			err: 'lastname required or should be length of 4 to 10 ',
			success: false
		});
	}
	if (
		!(!!data.password && validator.isByteLength(data.password, { min: 6 }))
	) {
		return res.status(422).json({
			err: 'password required or should be length of 6 or higher ',
			success: false
		});
	}
	next();
};

validatesignin = (req, res, next) => {
	console.log(req.body);
	const data = req.body;
	if (!(!!data.email && validator.isEmail(data.email))) {
		return res.status(422).json({
			err: 'email required or not valid',
			success: false
		});
	}
	if (
		!(!!data.password && validator.isByteLength(data.password, { min: 6 }))
	) {
		return res.status(422).json({
			err: 'password required or should be length of 6 or higher ',
			success: false
		});
	}
	next();
};

module.exports = { validatesignup, validatesignin };
