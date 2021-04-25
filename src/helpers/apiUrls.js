const API_ROOT = "http://localhost:8085/api";

export const apiUrls = {
  allCities: () => `${API_ROOT}/cities/`,
  topMovies: () => `${API_ROOT}/movies/topMovies/`,
  moviesInCity: (cityName) => `${API_ROOT}/cities/${cityName}/movies/`,
  movieDetails: (movieId) => `${API_ROOT}/movies/${movieId}/`,
  theatresForMovieInCity: (cityName, movieId) =>
    `${API_ROOT}/cities/${cityName}/movies/${movieId}/`,
  bookedSeats: (theatreId, screenId) =>
    `${API_ROOT}/theatres/${theatreId}/${screenId}/`,
  bookASeat: () => `${API_ROOT}/booking/`,
};
