import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Footer extends Component {
    render() {
      return (
<div class="mb-4">
<div class="card">
  <span className="text-light bg-dark">
    <div class="card-body">
      <p class="card-text"></p>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>
              <b>About Us</b>
            </h5>
            <p>
              <a href="#" class="text-decoration-none text-light">
                Aim
              </a>
            </p>

            <p>
              {" "}
              <a href="#" class="text-decoration-none text-light">
                Rental Subscriptions
              </a>
            </p>

            <p>
              <a href="#" class="text-decoration-none text-light">
                Terms and conditions
              </a>
            </p>
          </div>
          <div className="col">
            <h5>
              <b>Services</b>
            </h5>
            <p>
              <a href="#" class="text-decoration-none text-light">
                Self Drive
              </a>
            </p>
            <p>
              {" "}
              <a href="#" class="text-decoration-none text-light">
                Location and cars
              </a>
            </p>
            <p>
              {" "}
              <a href="#" class="text-decoration-none text-light">
                Plan and Pricings
              </a>
            </p>
          </div>
          <div className="col">
            <h5>
              
              <b>Contact Us</b>
            </h5>
            <p>
              {" "}
              <a href="#" class="text-decoration-none text-light">
                Andhra Pradesh
              </a>
            </p>

            <p>
              {" "}
              <a href="#" class="text-decoration-none text-light">
                Maharashtra
              </a>
            </p>

            <p>
              {" "}
              <a href="#" class="text-decoration-none text-light">
                New Delhi
              </a>
            </p>

            <p>
              {" "}
              <a href="#" class="text-decoration-none text-light">
                Gurjat
              </a>
            </p>

            <p>
              <a href="#" class="text-decoration-none text-light">
                Odisha
              </a>
            </p>

            <p>
              <a href="#" class="text-decoration-none text-light">
                Goa
              </a>
            </p>

            <p>
              <a href="#" class="text-decoration-none text-light">
                Karnataka
              </a>
            </p>

            <p>
              <a href="#" class="text-decoration-none text-light">
                Tamil Nadu
              </a>
            </p>
          </div>
          <div className="col">
            <h5>
              <b>Social Media</b>
            </h5>
            <p>
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </p>
            <p>
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </p>
            <p>
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </p>
            <p>
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </p>
          </div>
         
        </div>
      </div>
    </div>
  </span>
</div>
</div>
    );
}
}

export default Footer;