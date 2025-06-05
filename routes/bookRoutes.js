const express = require('express');
const router = express.Router();
const { addBook, getBooks, getBookById } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/books', authMiddleware, addBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);

module.exports = router;
