var keystone = require('keystone');
const Types = keystone.Field.Types;

var Feedbacks = new keystone.List("Feedbacks", {
	autokey: {path: 'slug', from: 'name', unique: true},
	map: {name: 'name'},
	label: 'Отзывы',
	plural: 'Отзывы',
	singular: 'Отзыв'
});

Feedbacks.add({
	name: {type: String, label: 'Имя', required: true},
	text: {type: String, label: 'Текст'},
	company: {type: String, label: 'Компания'},
	photo: {
		type: Types.LocalFile, 
		label: 'Фото', 
		dest: 'public/upload/photos/', 
		prefix: '/upload/photos',
		allowedTypes: ['image/png','image/pjpeg','image/tiff','image/jpeg'],
		filename(item, file){
			return `${item.id}.${file.extension}`
		},	
		format(item, file){
			return '<img src="/upload/photos/'+file.filename+'" style="max-width: 100px; max-height: 100px">'
		}
	}
});

Feedbacks.defaultColumns = 'name, text|50%, company, photo';
Feedbacks.register();
