import "./App.css";
import React, { useState } from "react";
import RegistrationComponent from "./forms/Registration/RegistrationComponent";
import SignInComponent from "./forms/SignIn/SignInComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAccountComponent from "./adminPanel/userAccount/UserAccountComponent";
import ContactComponent from "./adminPanel/Contacts/ContactComponent";

function App() {
  return (
    <div className="App">
      <ContactComponent />
    </div>
  );
}

export default App;
