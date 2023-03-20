import React from "react";
import AppBarComponent from "../../appBar/AppBar";
import "../../styles/ContactComponent.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Options from "../../pages/options/Options";
import ButtonGroup from "@mui/material/ButtonGroup";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SquareIcon from "@mui/icons-material/Square";
import "../../styles/AddContact.css";

const buttons = [
  <Button key="one">Close</Button>,
  <Button key="two" variant="contained">
    Save
  </Button>,
];

const buttonsextra = [
  <SquareIcon fontSize="small" sx={{ marginTop: "7px", color: "#2A8BF2" }} />,
  <Button key="one">Company</Button>,
  <SquareIcon
    fontSize="small"
    sx={{ marginTop: "7px", color: "#9400EA", m: 1 }}
  />,
  <Button key="two">Individual</Button>,
];

const AddContact = () => {
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
          <Grid item xs={6}>
            <div className="add-contact-menu">
              <div>
                {" "}
                <IconButton>
                  <ArrowBackIosIcon color="inherit" />
                </IconButton>{" "}
              </div>
              <div>
                {" "}
                <h3 style={{ fontFamily: "sans-serif" }}>Add contact</h3>
              </div>
              <div>
                {" "}
                <ButtonGroup color="secondary">{buttons} </ButtonGroup>
              </div>
            </div>
            <ButtonGroup
              color="inherit"
              variant="text"
              sx={{ marginLeft: "-100px", marginTop: "20px", color: "#BEBEBE" }}
            >
              {buttonsextra}{" "}
            </ButtonGroup>
            <div>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Job Position</p>
              </div>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Company</p>
              </div>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Mobile</p>
              </div>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Country</p>
              </div>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Email</p>
              </div>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">Phone</p>
              </div>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">City</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddContact;
