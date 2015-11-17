require('./Advantages');
require('./Feedbacks');
require('./Map');
require('./Services');
require('./Sliders');
require('./User');

var keystone = require('keystone');

var Map = keystone.list("Map");

var map = new Map.model({
	title: 'Главная карта компании',
	content: '',
	coordX: 0,
	coordY: 0,
	zoom: 16
});


map.save();
