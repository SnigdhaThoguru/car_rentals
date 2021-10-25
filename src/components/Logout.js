import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Logout extends Component {
    render(){
     return<>
       
       <br/>  <br/> <br/> <br/> <br/>      
    
      <center> <NavLink
              type="button"
              className="btn btn-success me-3"
              to={"/SignIn"}
        
            >
              Logout
            </NavLink>  </center>
            <br/>  <br/> <br/> <br/> <br/>      
    
     </>;

        
          
    }
    
}
export default Logout;