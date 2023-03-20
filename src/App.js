import "./App.css";
import React, { useState } from "react";
import RegistrationComponent from "./forms/Registration/RegistrationComponent";
import SignInComponent from "./forms/SignIn/SignInComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAccountComponent from "./pages/userAccount/UserAccountPage";
import ContactPage from "./pages/contacts/ContactPage";
import AddContact from "./pages/addContact/AddContact";
import CalendarPage from "./pages/calendar/CalendarPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {" "}
        <UserAccountComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
