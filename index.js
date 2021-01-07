require('dotenv').config();
const { connect } = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

// import routes
const adminRoute = require('./routes/checkadmin');
const indexRoute = require('./routes/index');
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');

app.use(cors());
app.use(express.json());

app.use('/', indexRoute);
app.use('/checkadmin', adminRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);

connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('CONNECTED TO THE DATABASE');
    app.listen(process.env.PORT, function () {
        console.log("listen on port " + process.env.PORT);
    });
}).catch((e) => {
    console.log('NOT CONNECTED TO THE DATABASE');
    console.log('ERROR:', e.message);
});



