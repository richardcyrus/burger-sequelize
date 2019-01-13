/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const express = require('express');
const router = express.Router();
const db = require('../models');

// Display the default page for the application.
router.get('/', (req, res, next) => {
    db.burger.findAll()
        .then((data) => {
            res.render('index', { burgers: data });
        }).catch((err) => next(err));
});

// Route handler to create a new record based on user submission.
router.post('/', (req, res, next) => {
    const burgerName = req.body.burgerName;

    db.burger.create({ burgerName: burgerName })
        .then((data) => {
            res.json(data);
        }).catch((err) => next(err));
});

// Route handler to update a record when the `Devour It!` button is
// clicked.
router.put('/', (req, res, next) => {
    const id = req.body.id;

    db.burger.update({ devoured: true }, { where: { id: id } })
        .then((data) => res.json(data))
        .catch((err) => next(err));
});

module.exports = router;
