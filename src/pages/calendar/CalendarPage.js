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
        width="96%"
        margin="auto"
        alignItems="center"
      >
        <div className="date d-flex  ">
          <Box className="calendarIcon">
            {" "}
            <CalendarComponent />
          </Box>

          <Box display="flex" flexDirection="column">
            <Typography variant="caption"></Typography>
            <Typography variant="caption"></Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default CalendarPage;
