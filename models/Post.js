var keystone = require('keystone');
const Types = keystone.Field.Types;

var Post = new keystone.List("Post", {
	autokey: {path: 'slug', from: 'title', unique: true},
	map: {name: 'title'},
	label: 'Постов',
	plural: 'Посты',
	singular: 'Пост'
});

Post.add({
	title: {type: String, required: true},
	description: {type: String},
	author: {type: Types.Relationship, ref: "User", label: "Автор"}
});

Post.add('Content',{
	content: {type: Types.Html, wysiwyg: true, height: 300}
});

Post.defaultColumns = 'title, description, author';
Post.register();
