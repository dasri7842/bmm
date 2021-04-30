import { apiUrls } from "./../helpers/apiUrls";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import useGetData from "./../hooks/useGetData";
import { useState } from "react";
import moment from "moment";
import useDocumentTitle from "../hooks/useDocumentTitle";
import MoviePosterCard from "./MoviePosterCard";

const MoiveDetails = ({ match }) => {
  const { city, movieId } = match.params;
  const { data, loading, errMsg } = useGetData(apiUrls.movieDetails(movieId));
  const [lang, setLang] = useState("");

  useDocumentTitle(`${data?.title ? data.title : "Movie"} details`);
  return (
    <div className="mt-3">
      {loading ? (
        <Loader />
      ) : errMsg !== "" ? (
        <div className="text-center">
          <p className="text-danger my-5">{errMsg}</p>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-start align-items-start mt-4">
          <div className="overflow-hidden m-2">
            <MovieBanner data={data} />
          </div>

          <div className="m-2 d-flex align-items-end">
            <div className="m-2 d-flex align-items-center justify-content-center">
              <span className="form-label mx-2">Language</span>
              <select
                className="form-control"
                placeholder="name@example.com"
                name="lang"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              >
                {data.languages.map((item, indx) => (
                  <option value={item} key={indx}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="m-2 mt-5">
              <Link
                to={`/theatres/${city}/${movieId}/${
                  lang === "" ? data.languages[0] : lang
                }/${moment().format("DD-MM-YY")}`}
                className="text-decoration-none text-dark mb-3"
              >
                <button type="button" className="btn btn-outline-secondary">
                  Book Tickets
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MovieBanner = ({ data }) => {
  return (
    <div className="d-md-flex">
      <div className="text-wrap">
        <h2>{data.title}</h2>
        <p className=" m-0 mt-1">
          {data.rating} rating • {data.duration}mins • {data.certification} •{" "}
          {moment(data.release_date).format("MMMM Do YYYY")}
        </p>
        <p className="m-0">Languages : {data.languages.join(", ")}</p>
        <p className="m-0">Genre : {data.genres.join(", ")}</p>
        <h5 className="mt-3">About the Movie</h5>
        <p>{data.about}</p>
        <h5 className="mt-3">Cast & Crew</h5>
        <div className="d-md-flex justify-content-around align-items-center">
          {data.crew.map((item, indx) => (
            <div className="text-center" key={indx}>
              <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6mVep8mmwTbVD9A6_0tAkjhiPOUikhenZnH3NGEImOX4eW2pbXJ8E-WmJcWXjcXY-bA&usqp=CAU`}
                alt={"profile default"}
                className="rounded-circle"
                width="100"
                height="100"
              ></img>
              <h6>
                {item.name} <small className="fw-normal">({item.role})</small>
              </h6>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <MoviePosterCard {...data} />
      </div>
    </div>
  );
};
export default MoiveDetails;
