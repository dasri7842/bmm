import { apiUrls } from "./../helpers/apiUrls";
import { useState, useEffect } from "react";
import { getConfig } from "./../helpers/reqConfig";
import MoviesList from "./moviesInCityComponents/MoviesList";
import FilterOptions from "./moviesInCityComponents/FilterOptions";
import useDocumentTitle from "./../hooks/useDocumentTitle";
import axios from "axios";

const MoviesInCity = ({ match }) => {
  const cityName = match.params.city;
  useDocumentTitle(`Movies in ${cityName}`);

  const reqData = useGetData(apiUrls.moviesInCity(cityName));

  const [filterOpt, SetFilterOpt] = useState({ lang: "All", genre: "All" });

  const handleChange = (e) =>
    SetFilterOpt({ ...filterOpt, [e.target.name]: e.target.value });

  return (
    <div className="mt-5 row align-items-start">
      <div className="col-lg-3">
        <FilterOptions {...{ reqData, filterOpt, handleChange }} />
      </div>
      <div className="col-lg-9">
        <MoviesList {...{ reqData, cityName, filterOpt }} />
      </div>
    </div>
  );
};

export default MoviesInCity;

const to_array1d = (data) => {
  let movies_list = {};
  if (data) {
    data?.forEach((movie_list) => {
      if (movie_list.length)
        movie_list?.forEach((movie_item) => {
          movies_list[movie_item?.movie_id] = movie_item;
        });
    });
  }
  let movies_array = [];
  for (let movie_id in movies_list) movies_array.push(movies_list[movie_id]);
  return movies_array;
};

const useGetData = (url, params) => {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    errMsg: "",
  });

  const [requrl] = useState(url);
  const [reqparams] = useState(params);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    const config = getConfig(reqparams);
    config["cancelToken"] = ourRequest.token;

    axios
      .get(requrl, config)
      .then((res) =>
        setResponse({ data: to_array1d(res.data), loading: false, errMsg: "" })
      )
      .catch((err) =>
        setResponse({ data: [], loading: false, errMsg: "Fetch Failed" })
      );

    return () => {
      ourRequest.cancel();
    };
  }, [requrl, reqparams]);
  return response;
};
