var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Student = mongoose.model('Student');
var Tutor = mongoose.model('Tutor')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/students', function(req, res, next) {
	var subjects = req.query.subjects;
	var level = req.query.level;
	var nationality = req.query.nationality;

	var query = Student.find();
	if (subjects){
		query = query.where('subjects').in(subjects);
	}
	if (level) {
		query = query.where('level').equals(level);
	}
	if (nationality) {
		query = query.where('nationality').equals(nationality);
	}

	query.exec(function(err, students) {
		if(err){return next(err);}
		res.json(students);
	});
});

router.get('/tutors', function(req, res, next) {
	var subjects = req.query.subjects;
	var level = req.query.level;
	var nationality = req.query.nationality;

	var query = Tutor.find();
	if (subjects) {
		query = query.where('subjects').in(subjects);
	}
	if (level) {
		query = query.where('level').equals(level);
	}
	if (nationality) {
		query = query.where('nationality').equals(nationality);
	}

	query.exec(function(err, tutors){
		if(err){return next(err);}
		res.json(tutors);
	});
});


// expects that req.body has the correct fields set
router.post('/addstudent', function(req, res, next) {
	var studentInput = new Student(req.body);
	studentInput.save(function(err, studentInput) {
		if(err){ return next(err);}
		res.json(studentInput);
	});
});

// expects that req.body has the correct fields set
router.post('/addtutor', function(req, res, next){
	console.log("request body: " + req.body);
	var tutorInput = new Tutor(req.body);
	tutorInput.save(function(err, tutorInput){
		if(err){return next(err);}
		res.json(tutorInput);
	});
});


module.exports = router;