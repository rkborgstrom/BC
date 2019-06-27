'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/post', (req, res) => {
  res.render('post', {title: 'Post'});
});

router.post('/post', (req, res, next) => {
    knex('all_data')
    .insert({
        full_name: req.body.full_name,
        mountain: req.body.mountain,
        message: req.body.message,
        passengers: req.body.passengers,
        time_leaving: req.body.time_leaving,
        date: req.body.date,
        time: req.body.time,
        phone_number: req.body.phone_number,
        insta: req.body.insta,
        today: req.body.today
    }, '*')
  
    .then((all_data) => {
        res.render('index', {all_data});
    })
  
    .catch((err) => {
        next(err);
    });
  });

module.exports = router;