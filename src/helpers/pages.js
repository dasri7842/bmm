import Home from "./../components/Home";
import MoviesInCity from "./../components/MoviesInCity";
import MovieDetails from "./../components/MoiveDetails";
import TheatresList from "./../components/TheatresList";
import SeatMap from "./../components/SeatMap";
import PayAmount from "./../components/PayAmount";

const pages = [
  {
    displayName: "Home",
    pageLink: "/",
    component: Home,
  },
  {
    displayName: "Moives in City",
    pageLink: "/movies/:city",
    component: MoviesInCity,
  },
  {
    displayName: "Movie details",
    pageLink: "/movies/:city/:movieId",
    component: MovieDetails,
  },
  {
    displayName: "Seat Map",
    pageLink: "/bookseats/:theatre_id/:screen_id/:show_time/:price",
    component: SeatMap,
  },
  {
    displayName: "Theatres for Movie in a City",
    pageLink: "/theatres/:city/:movieId/:language/:show_date",
    component: TheatresList,
  },
  {
    displayName: "Payment for the Seats",
    pageLink: "/payamount",
    component: PayAmount,
  },
];

export default pages;
