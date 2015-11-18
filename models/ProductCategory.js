var keystone = require('keystone');
const Types = keystone.Field.Types;

var ProductCategory = new keystone.List("ProductCategory", {
	autokey: {path: 'slug', from: 'title', unique: true},
	map: {name: 'title'},
	label: 'Категории',
	plural: 'Категории',
	singular: 'Категория'
});

ProductCategory.add({
	title: {type: String, label: 'Заголовок', required: true},
	description: {type: String, label: 'Описание'},
	image: {
		type: Types.LocalFile, 
		label: 'Изображение', 
		dest: 'public/upload/products/', 
		prefix: '/upload/products',
		allowedTypes: ['image/png','image/pjpeg','image/tiff','image/jpeg'],
		filename(item, file){
			return `${item.id}.${file.extension}`
		},	
		format(item, file){
			return '<img src="/upload/products/'+file.filename+'" style="max-width: 100px; max-height: 100px">'
		}
	}
});

ProductCategory.defaultColumns = 'title, description|80%';
ProductCategory.register();
