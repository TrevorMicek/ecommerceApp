const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
const corsOptions = require('./corsOptions');
const path = require('path');

const writeDatabase = require('./database/writeDatabase');

app.use(cors({origin:true,credentials: true}));

app.use('/', express.static('build'));
app.use('/api', express.static(path.join(__dirname, '../jsonData')));

writeDatabase();


     



/*
app.get("api/jsonData", function(req, res, next) {
    res.send(categories);
  });


const fs = require('fs');

router.get('/api/items', (req, res) => {

    fs.readFile('./data/db.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

});
*/

var listener = app.listen(4000, function() {
    console.log('Listening on port ' + listener.address().port);
});