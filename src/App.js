import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Otp from "./components/Otp";
import Car from "./components/Car";
import Booking from "./components/Booking";
import Confirm from "./components/Confirm";
import Viewrides from "./components/Viewrides";
import Help from "./components/Help";
import Feedback from "./components/Feedback";
import Payment from "./components/Confirm";
import Footer from "./components/Footer";
import Password from "./components/Password";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const MyContext = React.createContext(); // Store

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          userId: "jaydeep",
          password: "jaydeep123",
        },
        {
          userId: "ambika",
          password: "ambika123",
        },
      ],
    };
   
  }
  componentDidMount() {
    axios.get("db.json").then ((res) => {
      this.setState({db: res.data});
    });
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          store: this.state,
        }}
      >
        <Router>
          <Navbar></Navbar>
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/otp">
              <Otp />
            </Route>
            <Route path="/car">
              <Car />
              
            </Route>
            <Route path="/Booking">
              <Booking />
              </Route>
            <Route path="/Confirm">
              <Confirm />
            </Route>
            <Route path="/Viewrides">
              <Viewrides />
            </Route>
            <Route path="/Help">
              <Help />
            </Route>
            <Route path="/Feedback">
              <Feedback />
            </Route>
            <Route path="/Payment">
              <Payment />
            </Route>
          
            <Route path="/Password">
              <Password />
            </Route>
            <Route path="/Logout">
              <Logout />
            </Route>
           
          </Switch>
          <Footer></Footer>
        </Router>
       
      </MyContext.Provider>
    );
  }
}

export default App;