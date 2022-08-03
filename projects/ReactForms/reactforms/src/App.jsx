import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [subName, setSubName] = useState("");

    function handleChange(event) {
        setName(event.target.value);

    }

    function submitClicked(event) {
        console.log("submitted ");
        setSubName(name);
    }

  return (
    <div className="container">
          <h1>Hello {subName}</h1>
          <input
              onChange={handleChange}
              type="text"
              placeholder="What's your name?"
              value={name}
          />
          <button onClick={submitClicked}>Submit</button>
    </div>
  );
}

export default App;
