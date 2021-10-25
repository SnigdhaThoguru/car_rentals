import React, { Component } from "react";

import { NavLink } from "react-router-dom";
class Help extends Component {
  AlertFunction() {
    alert(" Thankyou for your response....");
  }
  render() {
    return (
      <>
        <div className="card bg-light text-white">
          <img
            src="https://t4.ftcdn.net/jpg/03/63/66/25/240_F_363662578_CU7pOytA0O0u9q4ngG0g81tzYKsLs4uv.jpg"
            alt="..."
          ></img>
          <div className="card-img-overlay">
            <center>
              {" "}
              <h2 className="card-title text-white">
                Help and Support
                <span className="material-icons">contact_support</span>
              </h2>
            </center>
            <br />
            <form className="row g-3 needs-validation" novalidate>
              <div className="col-md-3">
                <h5>What can we help you with?</h5>
                <br />
                <div className="sm-6">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/Booking"
                  >
                    <button
                      className="btn text-dark bg-warning"
                      type="button"
                    ><b>
                      Booking</b>
                    </button>
                    <br/><br/>
                    <br/>
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/SignIn"
                  >
                    <button
                      className="btn text-dark bg-warning"
                      type="button"
                    ><b>
                      Login</b>
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-3">
                <h5>Other issues :</h5>
                <textarea rows="6" cols="70" name="comment" form="usrform">
                  Mention your issue here.....
                </textarea>
                <br />
                <br />

                <NavLink
                  type="button"
                  className="btn btn-warning me-3"
                  to={"/"}
                  onClick={() => this.AlertFunction()}
                >
                  <button
                    className="btn btn-warning text-dark"
                    type="button bg-info"
                  >
                    <b>Submit</b>
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Help;