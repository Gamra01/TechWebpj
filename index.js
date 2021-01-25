const express = require('express');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
//Import routes
const userRoutes = require('./routes/users');

//config App
const app = express();

require('dotenv').config();

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
app.use(expressValidator())


//Routes Middleware
app.use('/api/users', userRoutes)




const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App is running on port ${port}`));
