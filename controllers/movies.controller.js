const Movies = require('../models/movie.model')



module.exports.list = (req, res, next) => {
    Movies.find()
    .then( movies => {
        res.render('movies', {movies})
    })
}


module.exports.detail = (req, res, next) => {
    const {id } = req.params
    Movies.findById(id)
    .then (movie => {
        res.render('movieDetail', {movie})
    }) 
}