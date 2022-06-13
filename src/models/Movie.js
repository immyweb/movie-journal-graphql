const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    theMovieDbId: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    dateWatched: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    review: {
      type: String,
      required: true,
    },

    like: {
      type: Boolean,
      required: true,
    },

    posterImg: {
      type: String,
      required: false,
    },

    releaseDate: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
