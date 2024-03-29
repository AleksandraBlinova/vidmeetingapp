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
import Notifications from "./components/Notifications";
import { theme } from "./theming/theme";
import Events from "./components/Events";
import EventTypes from "./components/EventTypes";

function App() {
  const [roleee, setRoleee] = useState(localStorage.getItem("rolee")); // 0 - guest; 1 - student; 2 - admin
  const changeRoleee = (value) => {
    localStorage.setItem("rolee", value);
  };
  return (
    <div className="bg-primary w-full overflow-hidden">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<SignInComponent changeRoleee={changeRoleee} />}
            />
            <Route path="/register" element={<RegistrationComponent />} />
            <Route path="/events" element={<Events />} />
            <Route path="/users" element={<Users />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/user" element={<UserAccountComponent />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="/chat" element={<ChatComponent />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/eventtypes" element={<EventTypes />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
