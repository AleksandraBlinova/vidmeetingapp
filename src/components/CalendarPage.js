import React from "react";
import { Card, CardHeader, Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

import CalendarComponent from "./CalendarComponent";
import AppBarComponent from "./AppBar";
import "../styles/Calendar.css";

const CalendarPage = () => {
  return (
    <div className="calendar-page-container">
      {" "}
      <AppBarComponent />
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
    </div>
  );
};

export default CalendarPage;
