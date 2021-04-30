import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { apiUrls } from "../helpers/apiUrls";
import useDocumentTitle from "../hooks/useDocumentTitle";
import loading_email_sent from "./../assets/icon_loading_email_512px.gif";

const PayAmount = ({ location }) => {
  const [email, SetEmail] = useState("");

  const [req, Setreq] = useState({
    loading: false,
    errMsg: "",
    success: false,
  });

  useDocumentTitle("Payment for the booked tickets");

  if (!location.state) return <Redirect to="/" />;

  const { seats, price } = location.state;

  const hanldeSubmit = (e) => {
    e.preventDefault();
    Setreq({ ...req, loading: true, errMsg: "" });
    axios
      .post(apiUrls.bookASeat(), { ...location.state, email })
      .then((res) => Setreq({ loading: false, errMsg: "", success: true }))
      .catch((err) =>
        Setreq({
          loading: false,
          errMsg: "Something Went Wrong",
          success: false,
        })
      );
  };

  if (req.success) return <SuccessScreen />;
  return (
    <div className="mt-5 col-md-6 mx-auto">
      <h3>Choose a Payment Method</h3>
      <div className="my-5">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          Booked tickets will be sent to this Email.
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {req.loading ? (
          <div className="d-flex flex-column text-center">
            <img
              src={loading_email_sent}
              alt="Email Sent Loader"
              className="img-fluid"
            ></img>
            <p className="text-muted text-info">
              Sending Tickets to Your Mail ...
            </p>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-success px-4"
            disabled={!validateEmail(email)}
            onClick={hanldeSubmit}
          >
            Pay {seats.length * price} rupess, {seats.length}X seats
          </button>
        )}
      </div>
      <div className="text-center">
        <p className="text-danger my-5">{req.errMsg}</p>
      </div>
    </div>
  );
};

const SuccessScreen = () => {
  return (
    <div className="col-md-6 my-5 mx-auto">
      <h1 className="display-1 text-success ml-2">Success</h1>
      <h3>Tickets were Sent to the email.</h3>
      <button onClick={useHistory().goBack} className="btn btn-secondary m-1">
        Book More
      </button>
    </div>
  );
};

function validateEmail(email) {
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default PayAmount;
