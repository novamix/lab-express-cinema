const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies.controller')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', moviesController.list)

router.get('/movie/:id', moviesController.detail)


module.exports = router;
