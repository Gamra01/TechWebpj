const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
//Import routes
const authRoutes = require('./routes/auth');

const userRoutes = require('./routes/users');
const categoryRoutes = require('./routes/categories');

//config App
require('dotenv').config();
const app = express();

//Db MongoDB
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

})
.then(() => console.log('db connected'))
.catch(() => console.log('not connect to db'))
//Middleware
app.use(express.json())
app.use(cookieParser())
app.use(expressValidator())


//Routes Middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api/category', categoryRoutes);




const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App is running on port ${port}`));