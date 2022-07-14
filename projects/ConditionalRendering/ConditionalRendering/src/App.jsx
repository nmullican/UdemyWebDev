import React from "react";
import Form from "./Form";

var userIsRegistered = false;
var buttonType = "Register";
var confirmPW = true;

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
userIsRegistered === true ? buttonType = "Login" : buttonType = "Register";

//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
userIsRegistered === false ? confirmPW = true : confirmPW = false;

function App() {
    return (
        <div className="container">
            <Form buttonType={buttonType} showConfirmPW={confirmPW}/>
        </div>
    );
}

export default App;
