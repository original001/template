var keystone = require('keystone');
var Slider = keystone.list("Slider");
var Advantages = keystone.list("Advantages");
var Services = keystone.list("Services");
var Feedbacks = keystone.list("Feedbacks");
var Map = keystone.list("Map");
var ProductCategory = keystone.list("ProductCategory");

exports = module.exports = (req, res) => {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'home';
	
	view.query('map', Map.model.findOne());

	view.query('slides', Slider.model.find());

	view.query('advantages', Advantages.model.find());

	view.query('services', Services.model.find());

	view.query('feedbacks', Feedbacks.model.find());
	
	view.query('productCategories', ProductCategory.model.find());

	view.render('index');

};
