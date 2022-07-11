import React from "react";
import Card from "./Card";

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

export default App;
