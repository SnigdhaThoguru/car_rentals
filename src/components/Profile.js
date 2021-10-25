import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="" alt="" />
                        <h2>My Profile</h2><br/>
                        <p><b>Welcome to RENT AND RUN</b></p>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-md-3">

                        <p ><span class="material-icons">
                            person
                        </span>User Name</p>
                        <p > <span class="material-icons">
                            smartphone
                        </span>Contact Number</p>
                        <p ><span class="material-icons">
                            home
                        </span>Address</p>
                        <p > <span class="material-icons">
                            email
                        </span>E-Mail ID</p>
                     </div>
                
                        <div className="col-md-3">
                        
                                <div class="card" >
                                    <img src="https://static.thenounproject.com/png/363633-200.png" alt="" height="50%" width="50%" />
                                    <div class="card-body">
                                        <p class="card-text"><h5>Personal Information</h5>
                                            <label for="exampleInputEmail1" className="form-label">Email id: someone@gmail.com </label><br />
                                            <label for="exampleInputName" className="form-label">Name: John Doe </label><br />
                                            <label for="exampleInputPhone" className="form-label">Phone no: 99xxxxxxx8 </label><br /></p>
                                    </div>
                                </div>
                            </div>
                           
                        </div><br/><br/><br/><br/>
                    </div>
                   
            
            
        );
    }
}
export default Profile;