var mongoose = require('mongoose');
var StudentSchema = mongoose.Schema({
	id: Number,
	firstname: String,
	lastname: String,
	level: String,
	subjects: [String],
	nationality: String
});

mongoose.model('Student', StudentSchema);