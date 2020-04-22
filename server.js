'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { getDadJoke } = require('./__workshop/2-promises-in-action/exercise-3');
const { getTronaldDump } = require('./__workshop/2-promises-in-action/exercise-4');
const { getGeekJoke } = require('./__workshop/2-promises-in-action/exercise-5');

const PORT = process.env.PORT || 8000;

const handleJoke = async (req, res) => {
    const type = req.params.type;
    if (type === 'dad') {
        const joke = await getDadJoke();
        res.send({ joke });
    } else if (type === 'geek') {
        const joke = await getTronaldDump();
        console.log(joke);
        res.send({ joke });
    } else {
        const joke = await getGeekJoke();
        console.log(joke);
        res.send({ joke });
    }
};

express()
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.json())
    .use(express.urlencoded({ extended: false }))
    .set('view engine', 'ejs')

    // endpoints
    .get('/gimme-joke/:type', handleJoke)
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));