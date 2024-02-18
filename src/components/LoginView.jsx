import React from "react";
import Login from "../pages/Login";
import Login1 from "../pages/Login1";
import "../components/LoginViwe.css";


export default function LoginView(){
    return(
        <div className="container">
      <div className="row">
        <div className="col-6">
          <Login1/>
        </div>
        <div className="col-6">
          <Login/>
          <p className="last-para"><a href=""><b>Create a Page</b></a> for a celebrity, brand or business</p>
        </div>
      </div>
    
      </div>
    )
}