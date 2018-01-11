var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var tests = require('../model/student.js');
var Student = mongoose.model('Student');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
// Set up default mongoose connection

var mongoDB = 'mongodb://127.0.0.1/mydb';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/', function (req, res, next) {
    console.log(req.body)
    // .create(req,body)
    Student.create(req.body, function (err, data) {
        if (!res) {
            return res.status(404).json({
                error: "Trigger not found"
            });
        }
        return res.status(200).json(data);
    })

    // res.send.st ({ message: "Success" });
});
module.exports = router;
