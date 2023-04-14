import "./App.css";
import React, { useState } from "react";
import { IndexRoute } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import RegistrationComponent from "./components/RegistrationComponent";
import SignInComponent from "./components/SignInComponent";
import UserAccountComponent from "./components/UserAccountPage";
import ContactPage from "./components/ContactPage";
import AddContact from "./components/AddContact";
import CalendarPage from "./components/CalendarPage";
import ChatComponent from "./components/Chat";
import Users from "./components/Users";
import { theme } from "./theming/theme";
import Events from "./components/Events";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInComponent />} />
            <Route path="/register" element={<RegistrationComponent />} />
            <Route path="/events" element={<Events />} />
            <Route path="/users" element={<Users />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/user" element={<UserAccountComponent />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="/chat" element={<ChatComponent />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
