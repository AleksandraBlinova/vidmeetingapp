import React from "react";
import { Card, CardHeader, Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
import CalendarComponent from "../../components/calendar/CalendarComponent";
import AppBarComponent from "../../appBar/AppBar";
import "../../styles/CalendarPage.css";
import { Grid } from "@mui/material";
import Options from "../options/Options";

const CalendarPage = () => {
  return (
    <div>
      {" "}
      <AppBarComponent />
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
          {" "}
          <Options />
        </div>
        <div>
          <CalendarComponent />
        </div>
      </Box>
    </div>
  );
};

export default CalendarPage;
