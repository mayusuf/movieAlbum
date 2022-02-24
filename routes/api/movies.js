const express = require('express');
const router = express.Router();

// Load Book model
const Movie = require('../../models/Movie');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('movie route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json({ nobookfound: 'No Movie found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Movie.create(req.body)
    .then(movie => res.json({ msg: 'Movie added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this movie' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(movie => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Movie.findByIdAndRemove(req.params.id, req.body)
    .then(movie => res.json({ mgs: 'Movie entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Movie' }));
});

module.exports = router;