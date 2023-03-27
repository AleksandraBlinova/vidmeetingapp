import React from "react";
import { Card, CardHeader, Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
import CalendarComponent from "../../components/calendar/CalendarComponent";
import AppBarComponent from "../../appBar/AppBar";

const CalendarPage = () => {
  return (
    <div className="date d-flex  ">
      {" "}
      <AppBarComponent />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="90%"
        height="80%"
        margin="auto"
        alignItems="center"
      >
        <CalendarComponent />
      </Box>
      <div></div>
    </div>
  );
};

export default CalendarPage;
