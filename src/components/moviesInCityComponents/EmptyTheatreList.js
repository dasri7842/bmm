import React from "react";

const EmptyTheatreList = () => {
  return (
    <div className="m-5">
      <h4>
        Unfortunately! Due to unmaintained database, there are no running
        theatres for any movies.
        <br /> <br />
        You can make a dummy booking with this{" "}
        <a href="/theatres/Vizianagaram/2/English/2021-08-28">link</a> for
        testing purpose.
      </h4>
    </div>
  );
};

export default EmptyTheatreList;
