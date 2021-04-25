import { Link } from "react-router-dom";
import MoviePosterCard from "./../MoviePosterCard";
import Loader from "./../Loader";

const MoviesList = ({ reqData, filterOpt, cityName }) => {
  const { loading, data, errMsg } = reqData;
  const { lang, genre } = filterOpt;
  return (
    <div>
      <h3>Movies In {cityName}</h3>
      {loading ? (
        <Loader />
      ) : errMsg !== "" ? (
        <div className="text-center">
          <p className="text-danger my-5">{errMsg}</p>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-start align-items-start mt-4">
          {data?.map((item, indx) =>
            (lang === "All" || item.languages.indexOf(lang) !== -1) &&
            (genre === "All" || item.genres.indexOf(genre) !== -1) ? (
              <Link to={`/movies/${cityName}/${item.movie_id}`} key={indx}>
                <MoviePosterCard {...item} key={indx} />
              </Link>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
