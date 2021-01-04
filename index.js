let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', function (req, res)){
    res.sendfile('index.html');
}

app.listen(8080, function () {
    console.log("listen on port 8080");
});

