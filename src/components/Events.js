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
import { Paper, Dialog, Button, Fab } from "@mui/material";
import { appointments } from "../data/data-for-month";
import { typesofevents } from "../data/data-for-month";
import { professors } from "../data/data-for-month";
import SquareIcon from "@mui/icons-material/Square";
import { Grid } from "@mui/material";
import { Table } from "antd";
import { ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import AppBarComponent from "./AppBar";
import "../styles/Events.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
  },
  marginLeft: 0,
  border: "1px solid #9c27b0",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "78ch",
      "&:focus": {
        width: "80ch",
      },
    },
  },
}));

function Events(props) {
  const [data, setData] = useState(appointments);

  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const [deletedAppointmentId, setDeletedAppointmentIdState] =
    useState(undefined);

  const [addedAppointment, setAddedAppointment] = useState({});
  const [startDayHour, setStartDayHour] = useState(0);
  const [endDayHour, setEndDayHour] = useState(24);

  useEffect(() => {
    setData(appointments);
  }, [appointments]);

  const setDeletedAppointmentId = (id) => {
    setDeletedAppointmentIdState(id);
  };

  const toggleConfirmationVisible = () => {
    setConfirmationVisible(!confirmationVisible);
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

    {
      fieldName: "professor",
      title: "Professor",
      instances: professors,
      allowMultiple: true,
    },
    {
      fieldName: "eventtype",
      title: "Event type",
      instances: typesofevents,
      allowMultiple: true,
    },
  ];

  const [chosenType, setChosenType] = useState("");
  const handleChangeChosenType = (event) => {
    setChosenType(event.target.innerText);
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [bottom, setBottom] = useState("bottomRight");
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  const buttonsextra = [
    <SquareIcon fontSize="small" sx={{ marginTop: "7px", color: "#ffa500" }} />,
    <Button key="one" onClick={handleChangeChosenType}>
      Table
    </Button>,
    <SquareIcon
      fontSize="small"
      sx={{ marginTop: "7px", color: "#EC407A", m: 1 }}
    />,
    <Button key="two" onClick={handleChangeChosenType}>
      Calendar
    </Button>,
  ];

  return (
    <div className="events-container">
      {" "}
      <AppBarComponent />
      <div className="calendar-zone-choose-container">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h3 className="calendar-zone-h4">Choose type of all events</h3>
          </Grid>
          <Grid item xs={4}>
            <ButtonGroup
              color="inherit"
              variant="text"
              sx={{ marginTop: "16px", color: "#BEBEBE" }}
            >
              {buttonsextra}{" "}
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>
      {chosenType == "CALENDAR" && (
        <>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="97%"
            height="70%"
            margin="auto"
            alignItems="center"
          >
            <div className="events-small-container">
              <Paper
                sx={{
                  backgroundColor: "inherit",
                  boxShadow: "none",
                }}
              >
                <Scheduler data={data} height={520} style={{ zIndex: "1111" }}>
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
                  <AppointmentTooltip
                    showCloseButton
                    showOpenButton
                    showDeleteButton
                  />
                  <AppointmentForm />
                  <Toolbar />
                  <DateNavigator />
                  <ViewSwitcher />
                  <DragDropProvider />
                </Scheduler>
              </Paper>
            </div>
          </Box>
        </>
      )}
      {chosenType == "TABLE" && (
        <>
          <div className="calendar-info-table">
            <div className="calendar-search-container">
              {" "}
              <ButtonGroup>
                {" "}
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: "#9c27b0" }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    onSearch={(value) => setSearchedText(value)}
                    onChange={(e) => {
                      setSearchedText(e.target.value);
                    }}
                  />
                </Search>{" "}
                <IconButton>
                  {" "}
                  <DeleteIcon sx={{ color: "#fff", fontSize: "30px" }} />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#fff",
                    backgroundColor: "#9400EA",
                    width: "47px",
                  }}
                  href="/"
                >
                  {" "}
                  <AddIcon />
                </IconButton>
              </ButtonGroup>{" "}
            </div>
            <Table
              rowSelection={rowSelection}
              columns={[
                {
                  title: "TITLE",
                  dataIndex: "title",
                  filteredValue: [searchedText],

                  onFilter: (value, record) => {
                    return (
                      String(record.title)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.startDate)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.endDate)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.location)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.professor)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.eventtype)
                        .toLowerCase()
                        .includes(value.toLowerCase())
                    );
                  },
                },
                {
                  title: "START DATE",
                  dataIndex: "startDate",
                  defaultSortOrder: "descend",
                  sorter: (a, b) => a.startDate - b.startDate,
                  render: (startDate) =>
                    ("0" + startDate.getDate()).slice(-2) +
                    "." +
                    ("0" + (startDate.getMonth() + 1)).slice(-2) +
                    "." +
                    startDate.getFullYear() +
                    " " +
                    ("0" + startDate.getHours()).slice(-2) +
                    ":" +
                    ("0" + startDate.getMinutes()).slice(-2),
                },
                {
                  title: "END DATE",
                  dataIndex: "endDate",
                  defaultSortOrder: "descend",
                  sorter: (a, b) => a.endDate - b.endDate,
                  render: (endDate) =>
                    ("0" + endDate.getDate()).slice(-2) +
                    "." +
                    ("0" + (endDate.getMonth() + 1)).slice(-2) +
                    "." +
                    endDate.getFullYear() +
                    " " +
                    ("0" + endDate.getHours()).slice(-2) +
                    ":" +
                    ("0" + endDate.getMinutes()).slice(-2),
                },
                {
                  title: "LOCATION",
                  dataIndex: "location",
                },

                {
                  title: "PROFESSOR",
                  dataIndex: "professor",
                  render: (professor) =>
                    professors.find((i) => i.id == professor).text.toString(),
                },
                {
                  title: "EVENT TYPE",
                  dataIndex: "eventtype",
                  render: (eventtype) =>
                    typesofevents.find((i) => i.id == eventtype).text,
                },
              ]}
              dataSource={appointments}
              pagination={{
                position: [bottom],
              }}
              size="small"
            />{" "}
          </div>
        </>
      )}
    </div>
  );
}

export default Events;
