const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  actors: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  director: {
    type: String,    
  },
  description: {
    type: String
  },
  published_year: {
    type: String
  },
  
});

module.exports = Movie = mongoose.model('movies', MovieSchema);