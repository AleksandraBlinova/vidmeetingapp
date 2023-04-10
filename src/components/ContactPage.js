import React from "react";

import Grid from "@mui/material/Grid";

import ButtonsContact from "./ButtonsContact";
import Cards from "./CardsContact";
import AppBarComponent from "./AppBar";
import "../styles/Contacts.css";

const ContactPage = () => {
  return (
    <div className="contacts-zone-container">
      <AppBarComponent />
      <div className="contacts-info-container">
        <ButtonsContact />

        <Cards />
      </div>
    </div>
  );
};

export default ContactPage;
