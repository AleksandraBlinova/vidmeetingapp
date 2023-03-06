import "./App.css";
import React, { useState } from "react";
import RegistrationComponent from "./forms/Registration/RegistrationComponent";
import SignInComponent from "./forms/SignIn/SignInComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SignInComponent />
    </div>
  );
}

export default App;
