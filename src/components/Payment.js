import React, { Component } from "react";

import { NavLink } from "react-router-dom";
class Payment extends Component {
  AlertFunction() {
    alert("Your Payment is Successful....");
  }
  render() {
    return (
      <>
        <div className="card bg-light text-dark">
       
          <img src="https://www.creationbc.com/wp-content/uploads/2021/08/getting-a-payment-gateway-for-your-dubai-company.jpg" alt=""/>
        <center>  <div className="card-img-overlay">
    
        <NavLink className="nav-link" activeClassName="active" to="/Booking">
            {" "}
            <span
              type="button"
              class="material-icons text-light ms-6"
              data-toggle="tooltip"
              data-placement="top"
              title="Back"
            >arrow_back_ios_new
            
            </span>
           
          </NavLink>
          
            <h1 className="card-title text-warning"><b>Payment Details</b></h1>
            <br />
            <form novalidate>
              <div className="row">
                <div className="col-md-3"></div>
              </div>
              <div className=" col-md-3">
                <label for="validationCustom04" className="form-label text-light">
                  <h5>Credit/Debit Card Number :</h5>
                </label>
                <div className="sm-6">
                  <input
                    id="ccn"
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9\s]{13,19}"
                    autocomplete="cc-number"
                    maxlength="16"
                    placeholder="xxxx xxxx xxxx xxxx"
                 required ></input> 
                </div>
              </div>

              <br />
              <div className=" col-md-3">
                <label for="validationCustom04" className="form-label text-light">
                  <h5>MM/YY :</h5>
                </label>
                <div className="sm-6">
                  <input
                    type="month"
                    className="form-control"
                    placeholder="enter month and year"
                    required
                  />
                </div>
              </div>
              <br />
                <div className="row">
               <center> <div className="col-md-3">
                  <label for="validationCustom04" className="form-label text-light">
                    <h5>CVV :</h5>
                  </label>
                  <div className="sm-6">
                    <input
                      type="numeric"
                      maxlength="3"
                      className="form-control"
                      required
                    />
                    <br />
                  </div>
                </div>
               <div className="text-warning"> <h4><b>Other Payments :</b></h4><br/></div>
                <div className="col-md-3">
                  <label for="validationCustom04" className="form-label text-light">
                    <h5>BHIM/UPI:</h5>
                  </label>
                  <div className="sm-6">
                    <input type="numeric" className="form-control" required />
                    <br />
                  </div>
                </div>
                <div className="col-12 " style={{ float: "right" }}>
                <NavLink
              type="button"
              className="btn btn-warning text-dark me-3"
              to={"/Feedback"}
              onClick={() => this.AlertFunction()}
            ><b>
              CONTINUE</b>
            </NavLink>      
              </div></center>
              </div>
            </form>
          </div></center>
        </div>
      </>
    );
  }
}

export default Payment