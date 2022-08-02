import React from "react";
import Time from '../time.jsx'

function App() {
    
  return (
    <div className="container">
          <h1>{<Time />}</h1>
          <button onClick={UpdateTime}>Get Time</button>
    </div>
  );
}

export function UpdateTime() {
    console.log("updated time called");
    window.location.reload(false);
}

export default App;

