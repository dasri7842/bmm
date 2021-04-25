import MoviePosterCard from "../MoviePosterCard";
import Loader from "./../Loader";

const TopMovies = ({ data, errMsg, loading }) => {
  return (
    <div className="mt-5">
      <h3>Top Recommended Movies</h3>
      {loading ? (
        <Loader />
      ) : errMsg !== "" ? (
        <div className="text-center">
          <p className="text-danger my-5">{errMsg}</p>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-around align-items-start mt-4 mx-auto">
          {data?.map((item, indx) => (
            <MoviePosterCard {...item} key={indx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopMovies;
