var keystone = require('keystone');
const Types = keystone.Field.Types;

var Map = new keystone.List("Map", {
	autokey: {path: 'slug', from: 'title', unique: true},
	map: {name: 'title'},
	label: 'Карта',
	plural: 'Карты',
	singular: 'Карта'
});

Map.add({
	title: {type: String, label: 'Заголовок', required: true},
	coordX: {type: Number, label: 'Координата Х', required: true, initial: 0},
	coordY: {type: Number, label: 'Координата Y', required: true, initial: 0},
	zoom: {type: Number, label: 'Увеличение', initial: 16}
});

Map.defaultColumns = 'title, coordX|20%, coordY|20%, zoom|10%';
Map.register();
