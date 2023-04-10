import "./App.css";
import React from "react";

import { ThemeProvider } from "@mui/material/styles";

import RegistrationComponent from "./components/RegistrationComponent";
import SignInComponent from "./components/SignInComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAccountComponent from "./components/UserAccountPage";
import ContactPage from "./components/ContactPage";
import AddContact from "./components/AddContact";
import CalendarPage from "./components/CalendarPage";
import Chat from "./components/Chat";
import { theme } from "./theming/theme";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CalendarPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/users" element={<UserAccountComponent />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
