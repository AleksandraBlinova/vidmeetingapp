import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SquareIcon from "@mui/icons-material/Square";

import AppBarComponent from "./AppBar";
import "../styles/Contacts.css";

const buttons = [
  <Button key="one" href="/contacts">
    Close
  </Button>,
  <Button key="two" variant="contained">
    Save
  </Button>,
];

const AddContact = () => {
  const [chosenType, setChosenType] = useState("");
  const handleChangeChosenType = (event) => {
    setChosenType(event.target.innerText);
  };
  const buttonsextra = [
    <SquareIcon fontSize="small" sx={{ marginTop: "7px", color: "#2A8BF2" }} />,
    <Button key="one" onClick={handleChangeChosenType}>
      Group
    </Button>,
    <SquareIcon
      fontSize="small"
      sx={{ marginTop: "7px", color: "#9400EA", m: 1 }}
    />,
    <Button key="two" onClick={handleChangeChosenType}>
      Individual
    </Button>,
  ];

  return (
    <div className="contacts-zone-container">
      <AppBarComponent />
      <div className="add-contact-container">
        <div className="add-contact-menu">
          <div>
            {" "}
            <IconButton href="/contacts">
              <ArrowBackIosIcon sx={{ color: "#fff" }} />
            </IconButton>{" "}
          </div>
          <div>
            {" "}
            <h3 style={{ color: "#fff" }}>Add contact</h3>
          </div>
          <div>
            {" "}
            <ButtonGroup color="secondary">{buttons} </ButtonGroup>
          </div>
        </div>
        <ButtonGroup
          color="inherit"
          variant="text"
          sx={{ marginTop: "20px", color: "#BEBEBE" }}
        >
          {buttonsextra}{" "}
        </ButtonGroup>
        {chosenType == "INDIVIDUAL" && (
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginTop: "10px" }}
          >
            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Name</p>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">University</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">University position</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Mobile</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Location</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Email</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Phone</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Degree</p>
              </div>
            </Grid>
          </Grid>
        )}
        {chosenType == "GROUP" && (
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginTop: "10px" }}
          >
            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Name</p>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">
                  Number of participants
                </p>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Contact email</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Contact phone</p>
              </div>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};

export default AddContact;
