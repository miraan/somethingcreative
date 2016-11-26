var mongoose = require('mongoose');
var TutorSchema = mongoose.Schema({
	id: Number,
	firstname: String,
	lastname: String,
	level: String,
	subjects: [String],
	nationality: String
});

mongoose.model('Tutor', TutorSchema);