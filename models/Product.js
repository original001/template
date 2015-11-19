var keystone = require('keystone');
const Types = keystone.Field.Types;

var Product = new keystone.List("Product", {
	autokey: {path: 'slug', from: 'title', unique: true},
	map: {name: 'title'},
	label: 'Продукты',
	plural: 'Продукты',
	singular: 'Продукт'
});

Product.add({
	title: {type: String, label: 'Заголовок', required: true},
	about: {type: Types.Html, label: 'Описание', wysiwyg: true},
	description: {type: Types.Html, label: 'Подробное описание', wysiwyg: true},
	price: {type: Types.Money, label: 'Цена, руб.', format: '0,0.00'},
	category: {type: Types.Relationship, ref: 'ProductCategory', label: 'Категория'},
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

Product.defaultColumns = 'title, category, about|40%, price|15%, image';
Product.register();
