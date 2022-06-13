const config = {
  dbUrl: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.e0jlf.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  baseURL: "https://api.themoviedb.org/3/",
  fetchId: `search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=`,
  fetchDetail: `?api_key=${process.env.API_KEY}&language=en-US`,
  fetchCredits: `/credits?api_key=${process.env.API_KEY}&language=en-US`,
  imgUrl: `https://www.themoviedb.org/t/p/w220_and_h330_face/`,
};

module.exports = config;
