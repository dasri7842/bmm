const MoviePosterCard = (item) => {
  return (
    <div className="poster m-1 shadow-sm border rounded position-relative">
      <img
        src={item.poster_link}
        alt={item.title}
        className="img-fluid rounded"
      />
      <div className="poster-details-bg position-absolute h-100 w-100 bottom-0 d-none rounded"></div>
      <div className="poster-details p-2 position-absolute bottom-0 w-100 d-none text-white">
        <h4>{item.title}</h4>
        <p className="m-0">Rating : {item.rating}</p>
        <p className="text-truncate m-0">Genres: {item.genres.join("/")}</p>
        <p className="text-truncate m-0">Lang: {item.languages.join(", ")}</p>
      </div>
    </div>
  );
};

export default MoviePosterCard;
