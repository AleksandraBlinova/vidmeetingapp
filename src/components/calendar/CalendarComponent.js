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
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Paper, Dialog, Button, Fab } from "@mui/material";
import { appointments } from "./data/data-for-month";
import { green, orange } from "@mui/material/colors";
import "../../styles/CalendarComponent.css";

const PREFIX = "Demo";
const classes = {
  content: `${PREFIX}-content`,
  header: `${PREFIX}-header`,
  closeButton: `${PREFIX}-closeButton`,
  buttonGroup: `${PREFIX}-buttonGroup`,
  button: `${PREFIX}-button`,
  picker: `${PREFIX}-picker`,
  wrapper: `${PREFIX}-wrapper`,
  icon: `${PREFIX}-icon`,
  textField: `${PREFIX}-textField`,
  addButton: `${PREFIX}-addButton`,
  cardContent: `${PREFIX}-cardContent`,
  justifyButtons: `${PREFIX}-justifyButtons`,
};

function CalendarComponent(props) {
  const [data, setData] = useState(appointments);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [addParticipantsVisible, setAddParticipantsVisible] = useState(false);

  const [deletedAppointmentId, setDeletedAppointmentIdState] =
    useState(undefined);
  const [editingAppointment, setEditingAppointment] = useState(undefined);
  const [addedAppointment, setAddedAppointment] = useState({});
  const [startDayHour, setStartDayHour] = useState(0);
  const [endDayHour, setEndDayHour] = useState(24);
  const [isNewAppointment, setIsNewAppointment] = useState(false);

  useEffect(() => {
    setData(appointments);
  }, [appointments]);

  const onAddedAppointmentChange = (addedAppointment) => {
    setAddedAppointment(addedAppointment);
    setEditingAppointment(undefined);
    setIsNewAppointment(true);
  };

  const setDeletedAppointmentId = (id) => {
    setDeletedAppointmentIdState(id);
  };

  const toggleConfirmationVisible = () => {
    setConfirmationVisible(!confirmationVisible);
  };

  const toggleAddParticipantsVisible = () => {
    setAddParticipantsVisible(!addParticipantsVisible);
  };

  const addParticipantsView = (meetingId) => {
    toggleAddParticipantsVisible();
  };

  const commitDeletedAppointment = () => {
    let nextData = data.filter(
      (appointment) => appointment.id !== deletedAppointmentId
    );
    setData(nextData);
    setDeletedAppointmentId(null);
    toggleConfirmationVisible();
  };

  const commitChanges = ({ added, changed, deleted }) => {
    let newData = data;
    console.log(added);
    if (added) {
      let startingAddedId =
        data?.length > 0 ? data[data?.length - 1].id + 1 : 0;
      newData = [...data, { id: startingAddedId, ...added }];
    }

    if (changed) {
      newData = data.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      );
    }
    if (deleted !== undefined) {
      setDeletedAppointmentId(deleted);
      toggleConfirmationVisible();
    }

    setData(newData);
    setAddedAppointment({});
  };

  const [visible, setVisible] = useState(false);
  const onVisibleChange = () => {
    setVisible(!visible);
  };

  const [appointmentMeta, setappointmentMeta] = useState({
    target: null,
    data: {},
  });
  const onAppointmentMetaChange = ({ data, target }) => {
    console.log({ data, target });
    setappointmentMeta({ data, target });
  };

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
    <Paper sx={{ backgroundColor: "inherit", boxShadow: "none" }}>
      <Scheduler data={data} height={550} style={{ zIndex: "1111" }}>
        <ViewState />
        <EditingState onCommitChanges={commitChanges} />
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
