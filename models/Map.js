var keystone = require('keystone');
const Types = keystone.Field.Types;

var Map = new keystone.List("Map", {
	map: {name: 'title'},
	nocreate: true,
	nodelete: true,
	label: 'Карта',
	plural: 'Карта',
	singular: 'Карта'
});

Map.add({
	title: {type: String, hidden: true},
	content: {type: Types.Html, wysiwyg: true, label: 'Текст на карте'},
	coordX: {type: Number, label: 'Координата Х'},
	coordY: {type: Number, label: 'Координата Y'},
	zoom: {type: Number, label: 'Увеличение'}
});

Map.defaultColumns = 'title, coordX|20%, coordY|20%, zoom|10%';
Map.register();
