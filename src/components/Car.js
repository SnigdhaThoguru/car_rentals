import React from "react";
import { NavLink } from "react-router-dom";

class Car extends React.Component {
  constructor() {
    super();

    this.state = {
      cars: [
        {
          cId: 872534,
          cType: "Hatchback",
          cBrand: "Maruti Swift",
        },
        {
          cId: 956568,
          cType: "Hatchback",
          cBrand: "Baleno",
        },
        {
          cId: 176345,
          cType: "Hatchback",
          cBrand: "Grand i10",
        },
        {
          cId: 383838,
          cType: "Prime Sedan",
          cBrand: "Honda City",
        },
        {
          cId: 898432,
          cType: "Prime Sedan",
          cBrand: "Ford Aspire",
        },
        {
          cId: 8762334,
          cType: "Prime Sedan",
          cBrand: "Maruti Ciaz",
        },
        {
          cId: 804578,
          cType: "SUV",
          cBrand: "Creta",
        },
        {
          cId: 151635,
          cType: "SUV",
          cBrand: "Ford endeavour",
        },
        {
          cId: 176346,
          cType: "SUV",
          cBrand: "Fortuner",
        },
        {
          cId: 111111,
          cType: "Luxury",
          cBrand: "Benz",
        },
        {
          cId: 222222,
          cType: "Luxury",
          cBrand: "Audi",
        },
        {
          cId: 333333,
          cType: "Luxury",
          cBrand: "Volvo",
        },
      ],
      filteredCars: [
        {
          cId: 872534,
          cType: "Hatchback",
          cBrand: "Maruti Swift",
        },
        {
          cId: 956568,
          cType: "Hatchback",
          cBrand: "Baleno",
        },
        {
          cId: 176345,
          cType: "Hatchback",
          cBrand: "Grand i10",
        },
        {
          cId: 383838,
          cType: "Prime Sedan",
          cBrand: "Honda City",
        },
        {
          cId: 898432,
          cType: "Prime Sedan",
          cBrand: "Ford Aspire",
        },
        {
          cId: 8762334,
          cType: "Prime Sedan",
          cBrand: "Maruti Ciaz",
        },
        {
          cId: 804578,
          cType: "SUV",
          cBrand: "Creta",
        },
        {
          cId: 151635,
          cType: "SUV",
          cBrand: "Ford endeavour",
        },
        {
          cId: 176346,
          cType: "SUV",
          cBrand: "Fortuner",
        },
        {
          cId: 111111,
          cType: "Luxury",
          cBrand: "Benz",
        },
        {
          cId: 222222,
          cType: "Luxury",
          cBrand: "Audi",
        },
        {
          cId: 333333,
          cType: "Luxury",
          cBrand: "Volvo",
        },
      ],
    };
  }

  mapCars() {
    return this.state.filteredCars.map((car, index) => (
      <div key={car.cId} className="col-3 my-2">
        <div className="card">
          <div className="card-body">
            <p className="card-title  text-dark">{car.cType}</p>
            <h4 className="text-light bg-dark ">{car.cBrand}</h4>
          </div>
        </div>
      </div>
    ));
  }

  filterByBrand(brand) {
    let filteredCars = [];
    Object.assign(filteredCars, this.state.cars);

    let temp = filteredCars.filter(
      (filteredCar) => filteredCar.cType === brand
    );

    this.setState({
      filteredCars: temp,
    });
  }

  resetResults() {
    let resetCars = [];
    Object.assign(resetCars, this.state.cars);

    this.setState({
      filteredCars: resetCars,
    });
  }

  render() {
    return (
      <div className="container">
        <hr></hr>
        <div className="text-decoration:blink;">
          <NavLink className="nav-link" activeClassName="active" to="/">
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
          <h1>
            <center>View Cars</center>
          </h1>
        </div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://ymimg1.b8cdn.com/uploads/car_model/6223/pictures/6204556/2020-hyndai-i10__1_.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>HATCHBACK CARS</h2>
                <h3>
                  Price Starting at{" "}
                  <span className="material-icons">currency_rupee</span>
                  70/hr(Fuel free)
                </h3>
                <h4>A quick drive to Sunrise point</h4>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.autovista.in/assets/img/new_cars_colour_variants/ciaz-colour-pearl-midnight-black.jpg"
                class="d-block w-100"
                alt="..."
              />
              <br />
              <br />
              <div class="carousel-caption d-none d-md-block">
                <h2>PRIME SEDAN CARS</h2>
                <h3>
                  Price Starting at{" "}
                  <span className="material-icons">currency_rupee</span>
                  95/hr(Fuel free)
                </h3>
                <h4>Grab dinner and a movie</h4>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousel-caption d-none d-md-block text-dark">
                <br />
                <div className="text-dark">
                  <h2>SUV CARS</h2>
                </div>
                <h3>
                  Price Starting at{" "}
                  <span className="material-icons">currency_rupee</span>
                  140/hr(Fuel free)
                </h3>
                <h4>Head outstation with the entire Family</h4>
              </div>
              <img
                src="https://images3.alphacoders.com/740/740493.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.wallpapersafari.com/89/46/evYoK0.jpg"
                class="d-block w-100"
                alt="..."
              />
              <br />
              <div class="carousel-caption d-none d-md-block text-dark">
                <div className="text-light">
                  <h2>LUXURY CARS</h2>
                </div>
                <h3>
                  Price Starting at{" "}
                  <span className="material-icons">currency_rupee</span>
                  170/hr(Fuel free)
                </h3>
                <h4>Go out for a special meal</h4>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className="d-flex justify-content-start align-items-center">
          <div className="dropdown me-2">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Car Types
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterByBrand("Hatchback")}
                >
                  Hatchback
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterByBrand("Prime Sedan")}
                >
                  Prime Sedan
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterByBrand("SUV")}
                >
                  SUV
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterByBrand("Luxury")}
                >
                  Luxury
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown ms-auto ">
            <label className="form-label"></label>
            <div className="bg-dark">
              <select className="form-select bg-dark text-light" required>
                <option selected disabled value="">
                  Select Location
                </option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Banglore">Banglore</option>
                <option value="Pune">Pune</option>
                <option value="Bhuvneswar">Bhuvneswar</option>
                <option value="Vizag">Vizag</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
          </div>
          <button
            className="btn btn-warning ms-2"
            onClick={() => this.resetResults()}
          >
            Reset
          </button>
        </div>

        <div className="row">{this.mapCars()}</div>
        <br />
        <NavLink className="nav-link" activeClassName="active" to="/Booking">
          {" "}
         <center> <button type="button" className="btn bg-warning text-dark "><b>
            BOOK NOW</b>
          </button></center>
        </NavLink>

        <hr />
      </div>
    );
  }
}

export default Car;
