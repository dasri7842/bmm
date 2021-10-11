import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import { Search, XCircle, TrendingUp } from "react-feather";

const SearchCity = ({ data, loading, errMsg }) => {
  const [cityName, SetcityName] = useState("");

  const searchItems = [],
    suggestionItems = [];
  data?.forEach((item, indx) => {
    let subStrPos = item.toLowerCase().indexOf(cityName.toLowerCase());
    let validItem = cityName !== "" && subStrPos !== -1;
    (validItem ? searchItems : suggestionItems).push(
      <Link
        to={`/movies/${item}`}
        className="router-link border-top p-2 py-3 w-100"
        key={indx}
      >
        {validItem ? (
          <Search size="24px" className="m-auto p-auto me-3 mb-1" />
        ) : (
          <TrendingUp size="24px" className="m-auto p-auto me-3 mb-1" />
        )}
        {validItem ? makeOccBold(item, cityName) : item}
      </Link>
    );
  });

  return (
    <div className="row mx-1 position-relative d-flex justify-content-center mb-5 mt-5">
      <div className="col-lg-8 rounded shadow-sm border position-absolute top-100 mx-auto suggestion-box">
        <input
          type="text"
          className="w-100 searchbox m-2"
          placeholder="Enter Your city Name"
          value={cityName}
          onChange={(e) => SetcityName(e.target.value.trim())}
        />
        {cityName !== "" ? (
          loading ? (
            <Loader />
          ) : errMsg !== "" ? (
            <div className="text-center">
              <p className="text-danger my-5">{errMsg}</p>
            </div>
          ) : (
            <>
              {searchItems.length === 0 ? (
                <p className="router-link border-top p-2 py-3 w-100 m-1 text-truncate">
                  <XCircle size="24px" className="my-auto p-auto me-3 mb-1" />
                  No movies in available in <b>{cityName}</b> city.
                </p>
              ) : (
                <div className="d-flex flex-column my-1">{searchItems}</div>
              )}
              <div className="d-flex flex-column my-1">{suggestionItems}</div>
            </>
          )
        ) : null}
      </div>
    </div>
  );
};

const makeOccBold = (text, pattern) => {
  const sliced = [];
  while (true) {
    let pos = text.toLowerCase().indexOf(pattern.toLowerCase());
    if (pos === -1) break;
    let patLen = pattern.length;
    sliced.push(text.substr(0, pos));
    sliced.push(<b key={Math.random()}>{text.substr(pos, patLen)}</b>);
    text = text.substr(pos + patLen);
  }
  if (text.length) sliced.push(text);
  return sliced;
};

export default SearchCity;
