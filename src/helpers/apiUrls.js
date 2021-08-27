const API_ROOT = "https://bmm-drf.herokuapp.com/api";

export const apiUrls = {
  allCities: () => `${API_ROOT}/cities/`,
  topMovies: () => `${API_ROOT}/movie/top/?count=4`,
  moviesInCity: (cityName) => `${API_ROOT}/cities/${cityName}/movies/`,
  movieDetails: (movieId) => `${API_ROOT}/movie/${movieId}/`,
  theatresForMovieInCity: (cityName, movieId) =>
    `${API_ROOT}/cities/${cityName}/movies/${movieId}/`,
  bookedSeats: (theatreId, show_id) =>
    `${API_ROOT}/theatres/${theatreId}/${show_id}/`,
  bookASeat: () => `${API_ROOT}/booking/`,
};
