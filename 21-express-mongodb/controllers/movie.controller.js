const { client } = require('../config/db');

const getAllMovies = async (req, res) => {
  try {
    const db = client.db('movies_app');
    const movies = await db.collection('movies').find().toArray();
    res.json({
      message: 'Success get all movies',
      data: movies
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message
    });
  }
};

module.exports = {
  getAllMovies
};