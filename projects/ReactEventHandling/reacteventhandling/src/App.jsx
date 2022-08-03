import React, { useState } from "react";

function App() {
    const [hover, setHover] = useState(false);
        

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
          <button style={{
              backgroundColor: hover ? 'salmon' : '',
              color: hover ? 'white' : '',
          }}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}>Submit</button>          
    </div>
  );
}

export default App;
