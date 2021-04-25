import { apiUrls } from "./../helpers/apiUrls";
import Loader from "./Loader";
import useGetData from "./../hooks/useGetData";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

const TheatresList = () => {
  useDocumentTitle("Theatres available");

  const { city, movieId, show_date, language } = useParams();

  const { data, loading, errMsg } = useGetData(
    apiUrls.theatresForMovieInCity(city, movieId),
    { show_date, language }
  );

  return (
    <div className="mt-3">
      {loading ? (
        <Loader />
      ) : errMsg !== "" ? (
        <div className="text-center">
          <p className="text-danger my-5">{errMsg}</p>
        </div>
      ) : (
        <div>
          <FutureDates />
          <h4 className="m-2">
            <span className="badge bg-success me-2">{data.length}</span>
            Theatres available
          </h4>
          {data.map((item, indx) => (
            <TheaterShows {...item} key={indx} />
          ))}
        </div>
      )}
    </div>
  );
};

const FutureDates = () => {
  const { city, movieId, language, show_date } = useParams();
  const dates = [];
  for (let i = 0; i < 4; i++) {
    dates.push(moment().add(i, "days").format());
  }

  return (
    <div className="mb-3">
      {dates.map((item, indx) => (
        <a
          href={`/theatres/${city}/${movieId}/${language}/${moment(item).format(
            "DD-MM-YY"
          )}`}
          key={indx}
        >
          <button
            type="button"
            className={`btn mx-1 ${
              show_date === moment(item).format("DD-MM-YY")
                ? "btn-danger"
                : "btn-outline-secondary"
            }  `}
          >
            {moment(item).format("DD")}
            <br />
            {moment(item).format("ddd")}
          </button>
        </a>
      ))}
    </div>
  );
};

const TheaterShows = (data) => {
  return (
    <div className="p-2 my-2 border-top round row align-item-center">
      <div className="col-lg-4">
        <h5>
          {data.name} - {data.price}₹
        </h5>
        <span>
          {data.street} - {data.city}
        </span>
      </div>
      <div className="col-lg-8 my-auto">
        <div className="d-flex justify-content-around align-item-center">
          {data.show_time.map((time, indx) => (
            <Link
              to={`/bookseats/${data.theatre_id}/${data.screen_id}/${time}/${data.price}`}
              key={indx}
            >
              <button type="button" className="btn btn-outline-success m-1">
                {moment(time).format("hh:mm A")}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheatresList;
