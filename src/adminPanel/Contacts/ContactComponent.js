import React from "react";
import AppBarComponent from "../../navbar/AppBar";
import "./ContactComponent.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Options from "../options/Options";
import "./ContactComponent.css";
import ButtonsContact from "./ButtonsContact";
import Cards from "./Cards";

const ContactComponent = () => {
  return (
    <div className="contacts-zone-container">
      <AppBarComponent />

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#fff",
          marginTop: "20px",
          marginRight: "40px",
          marginLeft: "40px",
          borderRadius: "15px",
        }}
      >
        <Grid container>
          <Options />
          <Grid item xs={8}>
            <div className="user-info-container">
              <ButtonsContact />

              <Grid item xs={8}>
                <Cards />
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ContactComponent;
