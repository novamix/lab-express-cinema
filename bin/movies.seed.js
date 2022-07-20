const mongoose = require('mongoose')

const Movie = require('../models/movie.model')
const MOVIES = require('../data/movies.json')


// Conexión a la base de datos

require('../db/index.js')


mongoose.connection.once('open', () => {
    mongoose.connection.db.dropDatabase()
      .then(() => {
        console.info('Db dropped')
  
        return Movie.create(MOVIES)
      })
      .then(moviesCreated => {
        moviesCreated.forEach(movie => console.log(`${movie.title} ha sido creado`))
  
        // Cerrar la conexion
        return mongoose.connection.close()
      })
      .then(() => {
        console.log('Connection closed')
  
        process.exit(1)
      })
      .catch(err => {
        console.error(err)
        process.exit(0)
      })
  })