import React, { Component } from "react";
import { p } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <>
        <hr />
        <div className="row">
          <div className="sm-6">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src="https://www.vevs.com/app/web/upload/source/what-to-write-about-in-your-car-rental-blog-cover-63.jpg"
                    className="d-block w-100 h-90"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4>Good Cars with reasonable cost...</h4>
                    <h5>Faster is Fetal..Slower is Safe...</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://miro.medium.com/max/1400/1*NcSRk5KrDpFyPOKAC0x9fw.jpeg"
                    className="d-block w-100"
                    alt="..."
                    width="100px"
                    height="550px"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <br />
                    <br />
                    <br />
                    <h4 className="text-light">Get it from your location...</h4>
                    <h5 className="text-light">
                      The secret to getting ahead is to get started....
                    </h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://i1.wp.com/onhike.com/wp-content/uploads/2021/07/how-to-get-a-good-price-from-your-car-sale.jpg?fit=795%2C455&ssl=1"
                    class="d-block w-100"
                    alt="..."
                    height="550px"
                  />
                  <br />
                  <div class="carousel-caption d-none d-md-block text-light">
                    <b>
                      {" "}
                      <h5>Choose your Comfort</h5>
                      <h5>Life is a journey and holds only the key</h5>
                    </b>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn-ds.com/blogs-media/sites/285/2020/08/18192440/Vehicle-Disinfection-Services_A_b.jpg"
                    className="d-block w-100 h-90"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4>
                      <b>Safely Sanitized and door step delivery</b>
                    </h4>
                    <h5>
                      <b>Your saftey is our first Priority....</b>
                    </h5>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <br />
          <br />
          <div className="container">
            <div className="d-flex justify-content-start align-items-start">
              <br />
              <span className="material-icons text-primary ms-auto">
                chevron_right
              </span>
              <span className="text-dark">
               <center> <p className="fst-italic">
                  <b>
                    Vehicle leasing or Car Rentals is the leasing (or the use)
                    of a motor vehicle for a fixed period of time at an agreed
                    amount of money for the lease. It is commonly offered by
                    dealers as an alternative to vehicle purchase but is widely
                    used by businesses as a method of acquiring (or having the
                    use of) vehicles for business, without the usually needed
                    cash outlay. Car rentals on hourly, daily, weekly, monthly
                    or yearly basis. Available car hire across segments such as
                    SUVs, ultra-luxury and sedans. Freedom to choose prices with
                    or without fuel car rentals. 100% Doorstep delivery and
                    return. Have the flexibility of getting the vehicle
                    delivered in any location in a city, and having it picked
                    up. in another.
                  </b>
                </p></center>
              </span>
            </div>

            <hr></hr>
            <br></br>

            <span className="text-danger">
              <marquee behavior="scroll" direction="left">
                <i>
                  <p class="h3">
                    SOME DAYS NOTHING BEATS A REALLY GOOD DRIVE...
                  </p>
                </i>
              </marquee>
            </span>
          </div>

          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="card border-light col-mb-3">
              <div class="card-header"><center><span className="material-icons">local_gas_station</span></center></div>
              <div class="card-body text-dark">
               <center> <h5 class="card-title text-success">Our Prices<br/> Include Free Fuel</h5></center>
               <center> <p class="card-text">
                  You never need to pay for Fuel. If you need extra <br/>fuel just
                  fill up and keep the receipt,<br/> we will refund the amount.
                </p></center>
              </div>
            </div>
            <div class="card border-light col-mb-3">
              <div class="card-header"><center><span className="material-icons">schedule</span></center></div>
              <div class="card-body text-dark">
              <center>  <h5 class="card-title text-success">
                  Rent by the Hour,<br/> Day, Week, or Month
                </h5></center>
               <center> <p class="card-text">
                  You choose how long you need the car for.
                </p></center>
              </div>
            </div>
            <div class="card border-light col-mb-3">
              <div class="card-header"><center><span className="material-icons">car_rental</span></center></div>
              <div class="card-body text-dark">
               <center> <h5 class="card-title text-success">
                  Range of Cars: SUV,<br/> Luxury, Sedan,...
                </h5></center>
               <center> <p class="card-text">
                  Pick the car that fits your needs. From the 5 <br/>seater hatchback
                  to the luxurious BMW.
                </p></center>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="card border-light mb-3">
              <div class="card-header"><center><span className="material-icons">house</span></center></div>
              <div class="card-body text-dark">
               <center> <h5 class="card-title text-success">
                  Located in Your <br/>Neighbourhood or Near Your Office
                </h5></center>
               <center> <p class="card-text">
                  We have many locations across your city, so you<br/> can book a car
                  that’s within walking distance of <br/>you.
                </p></center>
              </div>
            </div>
            <div class="card border-light mb-3">
              <div class="card-header"><center><span className="material-icons">menu_book</span></center></div>
              <div class="card-body text-success">
               <center> <h5 class="card-title">Book weeks or minutes<br/> before pick-up</h5></center>
               <center> <p class="card-text text-dark">
                  Whether you plan way ahead or make up your<br/> mind just in time,
                  Zoomcar is there for you.
                </p></center>
              </div>
            </div>
            <div class="card border-light mb-3">
              <div class="card-header"><center><span className="material-icons">travel_explore</span></center></div>
              <div class="card-body text-success">
               <center> <h5 class="card-title">Our Cars Have<br/> All-India Permits</h5></center>
               <center> <p class="card-text text-dark">
                  In RENT AND RUN you can go anywhere in India, no<br/> matter what
                  state you picked up the car. Just<br/> make sure to pay for the
                  state entry permit (if<br/> entering a different state) and tolls.
                </p></center>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="mb-4">
       
        
          
        </div>
      </>
    );
  }
}

export default Home;