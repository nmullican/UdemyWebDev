import React from "react";
import styles from './styles.css'
import { contacts } from './contacts.js'

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(({ name, imgURL, phone, email }) => (
                <Card name={name}
                    imgURL={imgURL}
                    phone={phone}
                    email={email} />
                
            ))}
         </div>
    );
}

function Card(props) {
    return <div className="card">
        <div className="top">
            <h2 className="name"> {props.name}</h2>
            <img className="circle-img" src={props.imgURL} alt="avatar_img"/>
        </div>
        <div className="bottom">
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    </div>
}

export default App;
