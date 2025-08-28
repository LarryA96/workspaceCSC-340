import { useState } from "react";
import "./App.css";
import Form from "../components/formLogic";

function App() {
  return (
    <>
      <div id="header">
        <div id="title">
          <h1>Guess what color I'm thinking of!</h1>
        </div>
      </div>
      <div id="formContainer">
        <Form />
      </div>
      <div id="footer">
        <h2 id="response"></h2>
        <img id="image" />
      </div>
    </>
  );
}

export default App;
