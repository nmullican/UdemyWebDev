import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import '../styles.css';
import { notes } from '../notes.js'

function App() {
  return (
    <div>
          <Header />
          {notes.map(note => {
              return (<Note title={note.title} content={note.content}/>)
          })}
          <Footer />
    </div>
  );
}

export default App;
