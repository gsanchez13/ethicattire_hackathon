const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require ('multer');
const cors = require('cors');

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

const itemsRouter = require('./routes/items');
const usersRouter = require('./routes/users');
const fabricsRouter = require('./routes/fabrics')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())

app.use('/items', itemsRouter);
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
