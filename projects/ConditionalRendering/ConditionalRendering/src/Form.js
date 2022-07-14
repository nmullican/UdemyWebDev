import React from "react";

function ShowConfirmPW(props) {
    const showPW = props.showConfirmPW;
    if (showPW) {
        return < input type="password" placeholder="Confirm Password" />;
    }
    return "";
}


function Form(props) {
    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <ShowConfirmPW showConfirmPW={props.showConfirmPW} />
            <button type="submit">{props.buttonType}</button>
        </form>
    );
}

export default Form;

