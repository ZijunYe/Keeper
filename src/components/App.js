import React from "react";
import Heading from "./Heading";
import Content from "./Content"; 
import Footer from "./Footer"; 
import Notes from "../Notes"; 


function createNotesEntry(notes){
  return(
    <Content
    key = {notes.key}
    title ={notes.title}
    content ={notes.content}
    />

  ); 
}

function App() {
  return (
    <div>
      <Heading />
      <div>{Notes.map(createNotesEntry)}</div>
      <Footer />
    </div>
  );
}

export default App;