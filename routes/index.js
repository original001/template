var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	app.get('/contacts', routes.views.contacts);
	app.get('/gallery', routes.views.gallery);
	app.get('/gallery/item', routes.views.gallery_item);
	app.get('/products', routes.views.products);
	app.get('/products/category', routes.views.products_category);
	app.get('/products/category/product', routes.views.product);
	
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
};
