import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Confirm extends Component {
    render() {
        return (

            <>

                <div className="card text-white">
                    <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/27032/new-s60-exterior-left-front-three-quarter-2.jpeg" className="card-img" alt="..." width="100px" height="700px" />
                    <div className="card-img-overlay">
                    <NavLink className="nav-link" activeClassName="active" to="/Booking">
            {" "}
            <span
              type="button"
              class="material-icons text-dark"
              data-toggle="tooltip"
              data-placement="top"
              title="Back"
            >arrow_back_ios_new
            
            </span>
           
          </NavLink>
                        <h1 className="card-title text-black text-center">Thank You!</h1>
                        <br></br>
                        <h3 className="card-text text-black text-center ">Your Booking is Confirmed  <span className="material-icons">task_alt</span></h3>
                        <br></br>
                        <div className="col-12 " style={{ float: "right" }}>
                        <p><NavLink
                            className="nav-link"
                            activeClassName="active"
                            to="/Payment"
                        >                            
                           <center> <button type="button" className="btn btn-dark text-warning btn-lg">CONTINUE</button></center>
                        </NavLink>
                        </p>
                        </div>
                    </div>
                </div>
            </>

        );


    }
}

export default Confirm