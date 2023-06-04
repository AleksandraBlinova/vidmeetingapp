import React, { useState } from "react";
import { Card, CardHeader, Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import { Grid } from "@mui/material";

import { ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Table } from "antd";

import CalendarComponent from "./CalendarComponent";
import AppBarComponent from "./AppBar";
import {
  appointments,
  students,
  professors,
} from "../data/data-for-month-my-calendar";

import "../styles/Calendar.css";

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

const CalendarPage = () => {
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
    <div className="calendar-page-container">
      {" "}
      <AppBarComponent />
      <div className="calendar-zone-choose-container">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h3 className="calendar-zone-h4">Choose type of your calendar </h3>
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
                      String(record.student)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.professor)
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
                  title: "STUDENT",
                  dataIndex: "student",
                  render: (student) =>
                    students.find((i) => i.id == student).text.toString(),
                },
                {
                  title: "PROFESSOR",
                  dataIndex: "professor",
                  render: (professor) => console.log(),
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
};

export default CalendarPage;
