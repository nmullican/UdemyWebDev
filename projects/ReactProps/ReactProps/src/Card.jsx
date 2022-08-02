import React from "react";
import Avatar from "./Avatar"
import './styles.css'

function Card(props) {
    return <div className="card">
        <div className="top">
            <p>ID Key is ({props.id})</p>
            <h2 className="name"> {props.name}</h2>
            <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    </div>
}

export default Card;