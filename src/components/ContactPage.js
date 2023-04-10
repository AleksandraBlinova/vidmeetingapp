import React from "react";

import Grid from "@mui/material/Grid";

import ButtonsContact from "./ButtonsContact";
import Cards from "./CardsContact";
import AppBarComponent from "./AppBar";
import "../styles/ContactComponent.css";

const ContactPage = () => {
  return (
    <div className="contacts-zone-container">
      <AppBarComponent />
      <div className="contacts-info-container">
        <ButtonsContact />
        <Grid item xs={8}>
          <Cards />
        </Grid>
      </div>
    </div>
  );
};

export default ContactPage;
