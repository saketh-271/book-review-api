const Review = require('../models/Review');
const Book = require('../models/Book');

const addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const bookId = req.params.id;
    const userId = req.user._id;

    const existing = await Review.findOne({ book: bookId, user: userId });
    if (existing) {
      return res.status(400).json({ error: 'You already reviewed this book' });
    }

    const review = new Review({ rating, comment, book: bookId, user: userId });
    await review.save();

    const book = await Book.findById(bookId);
    book.reviews.push(review._id);
    await book.save();

    res.status(201).json({ message: 'Review added', review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id, user: req.user._id });
    if (!review) return res.status(404).json({ error: 'Review not found' });

    const { rating, comment } = req.body;
    review.rating = rating || review.rating;
    review.comment = comment || review.comment;
    await review.save();

    res.status(200).json({ message: 'Review updated', review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!review) return res.status(404).json({ error: 'Review not found' });

    await Book.findByIdAndUpdate(review.book, { $pull: { reviews: review._id } });

    res.status(200).json({ message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addReview, updateReview, deleteReview };
