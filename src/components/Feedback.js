import React, { Component } from "react";
import { MyContext } from "../App";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
class Feedback extends Component {
    AlertFunction() {
        alert(" Thankyou for your response....");
      }
     
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="container bg-light">
            <h1 className="text-success mt-3 text-center text-success">
              <b>
                <i>Feedback Form</i>
              </b>
            </h1>
            <hr />

            <form className="row g-3">
              <div class="form-check form-check-inline">
                <h5>
                  1. Did you experience any problems accessing our vehicles or
                  services?
                </h5>
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1" required
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  No
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label class="form-check-label" for="inlineRadio3">
                  Somewhat
                </label>
              </div>
              <br />
              <div class="form-check form-check-inline">
                <h5>2. Was the service performed to your satisfaction?</h5>
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  No
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label class="form-check-label" for="inlineRadio3">
                  Somewhat
                </label>
              </div><br/>
              <div class="form-check form-check-inline">
                <h5>
                  3. Was our customer services provided to you in an accessiable manner?
                  
                </h5>
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  No
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label class="form-check-label" for="inlineRadio3">
                  Somewhat
                </label>
              </div>
    <br/>
              <div className="md-3">
                <label className="form-label"><h5>4. How was your Comfort?</h5></label>

                <select className="form-select" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option value="Afganistan">5-Excellent</option>
                  <option value="Albania">4-Very Good</option>
                  <option value="Algeria">3-Good</option>
                  <option value="American Samoa">2-Average</option>
                  <option value="Andorra">1-Poor</option>
                  <option value="Angola"></option>
                </select>
              </div>
<br/>
              <div className="col-12">
                <label className="form-label"><h5>5. Rate the performance of car?</h5></label>
                <select className="form-select" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option value="Afganistan">5-Excellent</option>
                  <option value="Albania">4-Very Good</option>
                  <option value="Algeria">3-Good</option>
                  <option value="American Samoa">2-Average</option>
                  <option value="Andorra">1-Poor</option>

                </select>
              </div><br/>
              <div className="md-3">
                <label className="form-label "><h5>6.Rate your overall experience!</h5></label>
                <select className="form-select" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option value="Afganistan">5-Excellent</option>
                  <option value="Albania">4-Very Good</option>
                  <option value="Algeria">3-Good</option>
                  <option value="American Samoa">2-Average</option>
                  <option value="Andorra">1-Poor</option>
                </select>
              </div>
             
              <br/><br/>
              <div className="col-md-3">
                  <h5>7. Any Comments/ Suggestions :</h5>
                  <textarea rows="6" cols="70" name="comment" form="usrform">
                    Add your comments here...</textarea></div>
                    <div className="col-12">
            <br />
            <NavLink
              type="button"
              className="btn btn-success me-3"
              to={"/"}
              onClick={() => this.AlertFunction()}
            >
              Submit Form
            </NavLink>

          </div><hr/>
            </form>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default withRouter(Feedback)