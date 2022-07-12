import React from "react";
import './styles.css';
import { emojipedia } from "./emojipedia.js"
import Card from "./Card.jsx"


function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>        
            </h1>

            <dl className="dictionary">
                {emojipedia.map(emoji => {
                    return (
                        <Card name={emoji.name}
                            emoji={emoji.emoji}
                            meaning={emoji.meaning}
                        />)
                })}
            </dl>
           
        </div>
    );
}

export default App;

