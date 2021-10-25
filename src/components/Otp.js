import React, { Component } from "react";

class Otp extends Component {
  render() {
    return (
      <div className="card text-white bg-primary m-5 me-5">
        <div className="card-header">OTP is sent to your registered number successfully</div>
        <div className="card-body">
          <h5 className="card-title">Enter the OTP :</h5>
          <div className="container" size="2">
            <input
              type="text"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Otp;