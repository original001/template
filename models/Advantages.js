var keystone = require('keystone');
const Types = keystone.Field.Types;

var Advantages = new keystone.List("Advantages", {
	autokey: {path: 'slug', from: 'title', unique: true},
	map: {name: 'title'},
	label: 'Преимущества',
	plural: 'Преимущества',
	singular: 'Преимущество'
});

Advantages.add({
	title: {type: String, label: 'Заголовок', required: true},
	description: {type: String, label: 'Описание'},
	image: {
		type: Types.LocalFile, 
		label: 'Изображение', 
		dest: 'public/upload/advantages/', 
		prefix: '/upload/advantages',
		allowedTypes: ['image/png','image/pjpeg','image/tiff','image/jpeg'],
		filename(item, file){
			return `${item.id}.${file.extension}`
		}	
	}
});

Advantages.defaultColumns = 'title, description, image';
Advantages.register();
