var keystone = require('keystone');

exports = module.exports = (req, res) => {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	locals.section = 'contacts';
	
	view.render('contacts');
};
