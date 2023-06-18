import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import { Table } from "antd";

import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AppBarComponent from "./AppBar";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

import { ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import SquareIcon from "@mui/icons-material/Square";

import "../styles/Contacts.css";

import { dataSourceContacts } from "../data/contacts-data";
import { dataSourceContactsGroups } from "../data/contacts-data";

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

const ContactPage = () => {
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

  const [chosenType, setChosenType] = useState("");
  const handleChangeChosenType = (event) => {
    setChosenType(event.target.innerText);
  };

  const hasSelected = selectedRowKeys.length > 0;

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

      <div className="contacts-info-container">
        <>
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
              href="/addcontact"
            >
              {" "}
              <AddIcon />
            </IconButton>
          </ButtonGroup>

          <div className="contacts-info-table">
            {" "}
            <Table
              rowSelection={rowSelection}
              columns={[
                {
                  title: "NAME OF CONTACT",
                  dataIndex: "nameofcontacts",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return (
                      String(record.nameofcontacts)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.email)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.nickname)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.phone)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.degree)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.university)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      String(record.universityposition)
                        .toLowerCase()
                        .includes(value.toLowerCase())
                    );
                  },
                },
                {
                  title: "EMAIL",
                  dataIndex: "email",
                },
                {
                  title: "PHONE",
                  dataIndex: "phone",
                },
                {
                  title: "NICKNAME",
                  dataIndex: "nickname",
                },
                {
                  title: "UNIVERSITY POSITION",
                  dataIndex: "universityposition",
                },
                {
                  title: "UNIVERSITY",
                  dataIndex: "university",
                },
                {
                  title: "DEGREE",
                  dataIndex: "degree",
                },
              ]}
              dataSource={dataSourceContacts}
              pagination={{
                position: [bottom],
              }}
              size="small"
            />{" "}
          </div>
        </>
      </div>
    </div>
  );
};

export default ContactPage;
