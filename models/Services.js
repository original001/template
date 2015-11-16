var keystone = require('keystone');
const Types = keystone.Field.Types;

var Services = new keystone.List("Services", {
	autokey: {path: 'slug', from: 'title', unique: true},
	map: {name: 'title'},
	label: 'Услуги',
	plural: 'Услуги',
	singular: 'Услуга'
});

Services.add({
	title: {type: String, label: 'Заголовок', required: true},
	description: {type: String, label: 'Описание'},
	icon: {
		type: Types.Select, 
		label: 'Иконка',
		options: [{
			value: 'film',
			label: 'Фильм'
		},{
			value: 'pencil',
			label: 'Карандаш'
		}, {
			value: 'cloud',
			label: 'Oблако'
		}]
	}
});

Services.defaultColumns = 'title, description, image';
Services.register();
