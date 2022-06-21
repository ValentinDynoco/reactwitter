const express = require('express');
const bodyParser = require('body-parser');
const db = require("./app/models");
db.sequelize.sync();
const cors = require("cors");
var connection = require('./app/config/db.config');

const app = express();
const port = process.env.PORT || 5000;

var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.get('/api/get_tweets', (req, res) => {
    const tweets = db.sequelize.query('SELECT * FROM tweets;').then(response => {
        res.send({ tweets: response });
    });
});

app.post('/api/post_tweet', (req, res) => {
    console.log(req.body);
    const dateWithFormat = new Date(req.body.date)
    db.sequelize.query('INSERT INTO tweets (userName, userAt, commentaire, date, likes) VALUES (:userName, :userAt, :commentaire, :date, :likes);',
        {
            replacements : {
                userName : req.body.userName,
                userAt : req.body.userAt,
                commentaire : req.body.commentaire,
                date : dateWithFormat.getFullYear() + "-" + (dateWithFormat.getMonth() + 1) + "-" + dateWithFormat.getDate(),
                likes : req.body.likes
            }, type : db.sequelize.QueryTypes.INSERT
        })
})

app.post('/api/data', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
