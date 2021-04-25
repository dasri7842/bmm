import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const SearchCity = ({ data, loading, errMsg }) => {
  const [cityName, SetcityName] = useState("");

  const suggestionItems = data?.map((item, indx) => {
    return cityName !== "" &&
      item.toLowerCase().indexOf(cityName.toLowerCase()) !== -1 ? (
      <Link
        to={`/movies/${item}`}
        className="router-link border-top p-2 py-3 w-100"
        key={indx}
      >
        {item}
      </Link>
    ) : null;
  });

  return (
    <div className="row m-1 position-relative d-flex justify-content-center mb-5">
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
            <div className="d-flex flex-column my-1">{suggestionItems}</div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default SearchCity;
