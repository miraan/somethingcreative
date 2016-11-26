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
	Student.find(function(err, students) {
		if(err){return next(err);}
		res.json(students);
	});
});

router.get('/tutors', function(req, res, next) {
	
	Tutor.find(function(err, tutors){
		if(err){return next(err);}
		res.json(tutors);
	});
});

router.post('/addstudent', function(req, res, next) {
	var studentInput = new Student(req.body);
	studentInput.save(function(err, studentInput) {
		if(err){ return next(err);}
		res.json(studentInput);
	});
});

router.post('/addtutor', function(req, res, next){
	var tutorInput = new Tutor(req.body);
	tutorInput.save(function(err, tutorInput){
		if(err){return next(err);}
		res.json(tutorInput);
	});
});


module.exports = router;