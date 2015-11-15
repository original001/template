var keystone = require('keystone');
var Post = keystone.list('Post');


exports = module.exports = function(res, req){
	var view = new keystone.View(res, req);
	
	var locals = req.locals;
	
	locals.section = "posts";
	
	view.on('init', function (next){
		Post.model.find().exec(function(err, result){
			locals.posts = result;
			next();
		});	
	});
	
	view.render('posts');
};
