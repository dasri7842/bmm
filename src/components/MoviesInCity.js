import { apiUrls } from "./../helpers/apiUrls";
import useGetData from "./../hooks/useGetData";
import { useState } from "react";
import MoviesList from "./moviesInCityComponents/MoviesList";
import FilterOptions from "./moviesInCityComponents/FilterOptions";
import useDocumentTitle from "./../hooks/useDocumentTitle";

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
