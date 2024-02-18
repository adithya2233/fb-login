import React from "react";
import './Login.css'

export default function Login(){
    return(
        <div className="container-2">
            <form>

    <div class="form-floating">
      <input type="email" className="input-emal" class="form-control" id="floatingInput" placeholder="name@example.com or phone number"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" className="form-control mt-3" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button id="login-btn" class="btn btn-primary w-100 py-2" type="submit"><b>Login</b></button>
    <a href="" className="frgot-password">Forgotten password?</a>
    <hr />
    <button id="create-account-btn" className=" btn"><b>Create new account</b></button>
  </form>
  
        </div>
        
    )
}