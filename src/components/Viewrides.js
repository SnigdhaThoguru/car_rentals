import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Viewrides extends Component {
    render() {
        return (
            <>
                <div className="card text-white">
                
                    <img src="https://wallpaperaccess.com/full/4408805.jpg" className="card-img" alt="..." width="100px" height="700px" />
                    <div className="card-img-overlay">       
                    <NavLink className="nav-link" activeClassName="active" to="/Confirm">
            {" "}
            <span
              type="button"
              class="material-icons text-light"
              data-toggle="tooltip"
              data-placement="top"
              title="Back"
            >arrow_back_ios_new
            
            </span>
           
          </NavLink>                
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                to="/Help"
                            >  <center> <h2><b>View Rides</b></h2></center>
                                <h4 className="card-title text-black text-center m-5 me-5">There are no rides present.</h4>
                                <h4 className="card-title text-black text-center m-5 me-5">For more info tap here <span className="material-icons">arrow_forward </span><button className="btn btn-dark text-warning" type="button bg-dark">Contact Support</button>
                               </h4>
                            </NavLink>                       
                    </div>
                </div>
            </>
        );
    }
}

export default Viewrides;