import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SquareIcon from "@mui/icons-material/Square";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

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

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
      color: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
});

const AddContact = () => {
  const [chosenType, setChosenType] = useState("");
  const handleChangeChosenType = (event) => {
    setChosenType(event.target.innerText);
  };

  const [email, setEmail] = React.useState("Email");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const [phone, setPhone] = React.useState("Phone");

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const [degree, setDegree] = React.useState("Degree");

  const handleChangeDegree = (event) => {
    setDegree(event.target.value);
  };

  const [university, setUniversity] = React.useState("University");

  const handleChangeUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const [universityposition, setUniversityPosition] = React.useState(
    "University Position"
  );

  const handleChangeUniversityPosition = (event) => {
    setUniversityPosition(event.target.value);
  };

  const [name, setName] = React.useState("Name");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [nickname, setNickname] = React.useState("Nickname");

  const handleChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  const [numberofparticipants, setNumberofparticipants] = React.useState(
    "Number of participants"
  );

  const handleChangeNumberofparticipants = (event) => {
    setNumberofparticipants(event.target.value);
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
              <CssTextField
                value={name}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangeName}
                placeholder="Name"
              />
            </Grid>
            <Grid item xs={6}>
              <CssTextField
                value={nickname}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangeNickname}
                placeholder="Nickname"
              />
            </Grid>

            <Grid item xs={6}>
              <CssTextField
                value={university}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangeUniversity}
                placeholder="University"
              />
            </Grid>
            <Grid item xs={6}>
              <CssTextField
                value={universityposition}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangeUniversityPosition}
                placeholder="University Position"
              />
            </Grid>

            <Grid item xs={6}>
              <CssTextField
                value={email}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangeEmail}
                placeholder="Email"
              />
            </Grid>
            <Grid item xs={6}>
              <CssTextField
                value={phone}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangePhone}
                placeholder="Phone number"
              />
            </Grid>
            <Grid item xs={6}>
              <CssTextField
                value={degree}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangeDegree}
                placeholder="Degree"
              />
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
              <CssTextField
                value={name}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangeName}
                placeholder="Name"
              />
            </Grid>

            <Grid item xs={6}>
              <div className="add-contact-menu-item">
                <p className="add-contact-menu-item-p">
                  Number of participants
                </p>
              </div>
            </Grid>

            <Grid item xs={6}>
              <CssTextField
                value={email}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangeEmail}
                placeholder="Email"
              />
            </Grid>

            <Grid item xs={6}>
              <CssTextField
                value={phone}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangePhone}
                placeholder="Phone number"
              />
            </Grid>

            <Grid item xs={6}>
              <CssTextField
                value={numberofparticipants}
                id="custom-css-outlined-input"
                sx={{ width: "400px", color: "#fff" }}
                onChange={handleChangeNumberofparticipants}
                placeholder="Number of participants"
              />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};

export default AddContact;
