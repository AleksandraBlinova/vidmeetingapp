import React, { useState } from "react";
import { Card, CardHeader, Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import { Grid } from "@mui/material";

import { ButtonGroup, IconButton } from "@mui/material";

import CalendarComponent from "./CalendarComponent";
import AppBarComponent from "./AppBar";
import "../styles/Calendar.css";

const CalendarPage = () => {
  const [chosenType, setChosenType] = useState("");
  const handleChangeChosenType = (event) => {
    setChosenType(event.target.innerText);
  };

  const buttonsextra = [
    <SquareIcon fontSize="small" sx={{ marginTop: "7px", color: "#ffa500" }} />,
    <Button key="one" onClick={handleChangeChosenType}>
      Calendar
    </Button>,
    <SquareIcon
      fontSize="small"
      sx={{ marginTop: "7px", color: "#EC407A", m: 1 }}
    />,
    <Button key="two" onClick={handleChangeChosenType}>
      Table
    </Button>,
  ];

  return (
    <div className="calendar-page-container">
      {" "}
      <AppBarComponent />
      <div className="calendar-zone-choose-container">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h3 className="calendar-zone-h4">Choose type</h3>
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup
              color="inherit"
              variant="text"
              sx={{ marginTop: "20px", color: "#BEBEBE" }}
            >
              {buttonsextra}{" "}
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>
      {chosenType == "CALENDAR" && (
        <>
          <div className="calendar-page-small-container">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="97%"
              height="80%"
              margin="auto"
              alignItems="center"
            >
              <div>
                <CalendarComponent />
              </div>
            </Box>
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarPage;
