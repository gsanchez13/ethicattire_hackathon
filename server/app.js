var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require ('multer');

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
     cb(null, "./public/images")
   },
   filename: (req, file, cb) => {
     let name = Date.now() + "-" + file.originalname
     cb(null, name)
   }
 })

const upload = multer ({
   storage: storage
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fabricsRouter = require('./routes/fabrics')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fabrics', fabricsRouter)

app.post('/upload', upload.single ("image"), (req,res,next) => {

    
   let imageUrl = "http://localhost:3001/" + req.file.path.replace('public/', '')
   res.json({
       imageUrl: imageUrl,
       message: "file uploaded"
})
})

module.exports = app;
