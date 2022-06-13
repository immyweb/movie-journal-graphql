const { RESTDataSource } = require("apollo-datasource-rest");
const config = require("../config");

class MovieDbApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.baseURL;
  }

  async getMovieInfo(id) {
    return this.get(`movie/${id}${config.fetchDetail}`);
  }

  async getMovieCastCrew(id) {
    return this.get(`movie/${id}${config.fetchCredits}`);
  }

  async searchMovie(title) {
    return this.get(`${config.fetchId}${title}`);
  }
}

module.exports = MovieDbApi;
