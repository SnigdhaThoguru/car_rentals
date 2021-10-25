import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
class Password extends Component {
  AlertFunction() {
    alert(" Your passoword reset is successful");
  }
  render() {
    return (
     
    <center><div className="row">
        <h1 className="text-dark mt-3">
          <i>Reset your Password</i>
        </h1><br/><br/> <br/><br/> <br/>
        <form>
          <div className="col-md-3">
            <h5 className="form-label">Create New Password </h5>

            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="enter your new password....."required
            />
          </div><br/>
          <div className="col-md-3">
            <h5 className="form-label">Confirm your New Password </h5>

            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="confirm your new password....."required
            />
          </div><br/>
          <NavLink
                        className="nav-link"
                        activeClassName="active"
                        to="/SignIn"
                        onClick={() => this.AlertFunction()}
                      >
                        <button
                          className="btn bg-dark text-light"

                          type="button"
                        ><b>
                          Continue</b>
                        </button>
                      </NavLink>
        </form><br/>
       
      </div> <br/><br/> <br/><br/> <br/><br/></center>
    );
  }
}

export default withRouter(Password);