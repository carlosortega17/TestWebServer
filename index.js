const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Variables
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Routes
app.use(require('./src/routes/index'));

// Listen
app.listen(port, ()=>{
    console.log('Server listen');
});