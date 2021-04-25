import Loader from "./../Loader";

const FilterOptions = ({ reqData, filterOpt, handleChange }) => {
  const { loading, data, errMsg } = reqData;
  let languages = [],
    genres = [];
  data?.forEach((movieItem) => {
    languages.push(...movieItem.languages);
    genres.push(...movieItem.genres);
  });
  languages = [...new Set(languages)];
  genres = [...new Set(genres)];
  return (
    <div>
      <h3>Filters</h3>
      {loading ? (
        <Loader />
      ) : errMsg !== "" ? (
        <div className="text-center">
          <p className="text-danger my-5">{errMsg}</p>
        </div>
      ) : (
        <div>
          <div className="mb-3">
            <label className="form-label">Language</label>
            <select
              className="form-control"
              placeholder="name@example.com"
              name="lang"
              value={filterOpt.lang}
              onChange={handleChange}
            >
              <option value={"All"}> All</option>
              {languages.map((lang, indx) => (
                <option value={lang} key={indx}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Genres</label>
            <select
              className="form-control"
              placeholder="name@example.com"
              name="genre"
              value={filterOpt.genre}
              onChange={handleChange}
            >
              <option value={"All"}> All</option>
              {genres.map((genre, indx) => (
                <option value={genre} key={indx}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterOptions;
