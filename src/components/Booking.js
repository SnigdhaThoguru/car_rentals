import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Booking extends Component {
  render() {
    return (
      <>
        <div class="card bg-dark text-purple">
          <img
            src="https://cars.tatamotors.com/images/dark/altroz-home.jpg"
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <NavLink className="nav-link" activeClassName="active" to="/Car">
              {" "}
              <span
                type="button"
                class="material-icons text-dark"
                data-toggle="tooltip"
                data-placement="top"
                title="Back"
              >
                arrow_back_ios_new
              </span>
            </NavLink>
            <h1 class="card-title text-warning">Book a car today...</h1>
            <br />
            <form novalidate>
              <div className="row">
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    <h5>Start date</h5>
                  </label>
                  <div className="sm-6">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="enter Start date here..."
                      required
                    />
                    <br />
                  </div>
                </div>
                <div class=" col-md-3">
                  <label for="validationCustom04" class="form-label">
                    <h5>End date</h5>
                  </label>
                  <div className="sm-6">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="enter time"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    <h5>Start time</h5>
                  </label>
                  <div className="sm-6">
                    <input type="time" className="form-control" required />
                    <br />
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    <h5>End time</h5>
                  </label>
                  <div className="sm-6">
                    <input
                      type="time"
                      className="form-control"
                      placeholder="enter time"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="ms-auto">
                    <label className="form-label">
                      <h5>range in km</h5>
                    </label>
                    <select className="form-select" required>
                      <option selected disabled value="">
                        {" "}
                        select
                      </option>
                      <option>0-100</option>
                      <option>100-300</option>
                      <option>300+ above</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-12 " style={{ float: "right" }}>
                    <p>
                      <br />
                      <NavLink
                        className="nav-link"
                        activeClassName="active"
                        to="/Confirm"
                      >
                        <button
                          className="btn bg-warning text-dark"
                          type="button"
                        ><b>
                          Confirm Booking</b>
                        </button>
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Booking;