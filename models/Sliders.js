var keystone = require('keystone');
const Types = keystone.Field.Types;

var Slider = new keystone.List("Slider", {
	autokey: {path: 'filename', from: 'name', unique: true},
	map: {name: 'name'},
	label: 'Слайдер',
	plural: 'Слайды',
	singular: 'Слайд'
});

Slider.add({
	name: {type: String, label: 'Имя', hidden: true},
	title: {type: String, label: 'Заголовок'},
	description: {type: String, label: 'Описание'},
	image: {
		type: Types.LocalFile, 
		label: 'Изображение', 
		dest: 'public/upload/slides/', 
		prefix: '/upload/slides',
		allowedTypes: ['image/png','image/pjpeg','image/tiff','image/jpeg'],
		filename(item, file){
			return `${item.id}.${file.extension}`
		}	
	}
});

Slider.defaultColumns = 'image, title, description';
Slider.register();
