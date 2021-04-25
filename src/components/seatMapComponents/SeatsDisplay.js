const SeatsDisplay = ({ data, handleSelectSeat, seatsSelected }) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const cols = [];
  for (let seatid = 1; seatid <= 15; seatid++) cols.push(seatid);
  return (
    <div className="my-1">
      {rows.map((rowID, indx) => {
        return (
          <div className={`row ${rowID === "B" ? "mb-5" : ""}`} key={indx}>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <span>{rowID}</span>
            </div>
            <div className="col-9 d-flex">
              {cols.map((colID, indx) => (
                <button
                  type="button"
                  className={`btn btn-outline-success btn-sm m-2 seat-btn p-0 ${
                    colID === 12 ? "ms-5" : ""
                  } ${
                    seatsSelected.indexOf(rowID + colID) !== -1
                      ? "btn-success text-white"
                      : ""
                  }`}
                  disabled={data.indexOf(rowID + colID) !== -1}
                  key={indx}
                  onClick={() => handleSelectSeat(rowID + colID)}
                >
                  {colID}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeatsDisplay;
