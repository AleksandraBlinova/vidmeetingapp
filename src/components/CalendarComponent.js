/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import React, { useState, useEffect } from "react";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";

import {
  Scheduler,
  Toolbar,
  MonthView,
  WeekView,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  DragDropProvider,
  ConfirmationDialog,
  AllDayPanel,
  DateNavigator,
  AppointmentForm,
  Resources,
} from "@devexpress/dx-react-scheduler-material-ui";

import { Paper } from "@mui/material";
import { appointments } from "../data/data-for-month";

import "../styles/Calendar.css";

function CalendarComponent(props) {
  const [data, setData] = useState(appointments);

  const [startDayHour, setStartDayHour] = useState(6);
  const [endDayHour, setEndDayHour] = useState(22);

  useEffect(() => {
    setData(appointments);
  }, [appointments]);

  const resources = [
    {
      fieldName: "location",
      title: "Location",
      instances: [
        { id: "Room 1", text: "Room 1", color: "#EC407A" },
        { id: "Room 2", text: "Room 2", color: "#7E57C2" },
        { id: "Room 3", text: "Room 3", color: "#ffa500" },
      ],
    },
  ];

  return (
    <Paper
      sx={{
        backgroundColor: "inherit",
        boxShadow: "none",
      }}
    >
      <Scheduler data={data} height={550} style={{ zIndex: "1111" }}>
        <ViewState />
        <EditingState />
        <WeekView
          startDayHour={startDayHour}
          endDayHour={endDayHour}
          cellDuration={120}
        />
        <MonthView />
        <AllDayPanel />
        <ConfirmationDialog />
        <Appointments />
        <Resources data={resources} />
        <AppointmentTooltip showCloseButton showOpenButton showDeleteButton />
        <AppointmentForm />
        <Toolbar />
        <DateNavigator />
        <ViewSwitcher />
        <DragDropProvider />
      </Scheduler>
    </Paper>
  );
}

export default CalendarComponent;
