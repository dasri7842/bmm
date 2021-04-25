import { apiUrls } from "./../helpers/apiUrls";
import Loader from "./Loader";
import useGetData from "./../hooks/useGetData";
import moment from "moment";
import { useState } from "react";
import SeatsDisplay from "./seatMapComponents/SeatsDisplay";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

const SeatMap = ({ match }) => {
  const { theatre_id, screen_id, show_time, price } = match.params;
  const [seatsSelected, SetSeatsSelected] = useState([]);

  const handleSelectSeat = (seatId) => {
    const index = seatsSelected.indexOf(seatId);
    if (index === -1) {
      SetSeatsSelected([...seatsSelected, seatId]);
    } else {
      const seatarray = seatsSelected.filter((id) => id !== seatId);
      SetSeatsSelected(seatarray);
    }
  };

  const params = {
    show_date: moment(Number(show_time)).format("YYYY-MM-DD"),
    show_time: moment(Number(show_time)).format("YYYY-MM-DD:HH:mm:ss"),
  };

  const { data, loading, errMsg } = useGetData(
    apiUrls.bookedSeats(theatre_id, screen_id),
    params
  );

  useDocumentTitle("Seat Map");
  return (
    <div>
      {loading ? (
        <Loader />
      ) : errMsg !== "" ? (
        <div className="text-center">
          <p className="text-danger my-5">{errMsg}</p>
        </div>
      ) : (
        <div>
          <div className="row d-flex justify-content-start mx-5 align-items-center my-3">
            <p className="col-4 text-muted mx-5 ps-5">
              {moment(Number(show_time)).calendar()}
            </p>
            <Link
              className="col-6"
              to={{
                pathname: "/payamount",
                state: {
                  ...params,
                  seats: seatsSelected,
                  theatre_id,
                  screen_id,
                  price,
                },
              }}
            >
              {seatsSelected.length !== 0 ? (
                <button type="button" className="btn btn-success px-4">
                  Pay {seatsSelected.length * price} rupess,{" "}
                  {seatsSelected.length}X seats
                </button>
              ) : null}
            </Link>
          </div>
          <div className="seat-map w-100 overflow-auto">
            <SeatsDisplay {...{ data, handleSelectSeat, seatsSelected }} />
            <p className="text-center mt-4"> All Eyes this Way please</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatMap;
