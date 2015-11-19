var keystone = require('keystone');
var Products = keystone.list("ProductCategory")

exports = module.exports = (req, res) => {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'products';

    view.query('products', Products.model.find());
	
	view.render('products');
};
			 
