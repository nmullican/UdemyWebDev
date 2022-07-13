import React from "react";
import Input from "./input.js";

function Login() {
    return (
        <form className="form">
            <Input />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;