import React, { useState } from "react";

import { Button, Table, Input } from "antd";

import AppBarComponent from "./AppBar";
import "../styles/Users.css";

import { dataSource } from "../data/users-data";

import { alpha, styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

const PurpleSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: purple[600],
    "&:hover": {
      backgroundColor: alpha(purple[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: purple[600],
  },
}));

const Users = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [bottom, setBottom] = useState("bottomRight");
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  const [searchedText, setSearchedText] = useState("");

  return (
    <div className="users-container">
      <AppBarComponent />

      <div className="users-table-container">
        {" "}
        <div className="users-table-container-header">
          <Button
            type="primary"
            style={{
              background: "#fff",
              borderColor: "none",
              color: "#000",
              width: "70px",
              marginRight: "10px",
              fontWeight: "500",
              height: "30px",
            }}
          >
            Add
          </Button>
          {hasSelected && (
            <>
              <Button
                type="primary"
                style={{
                  background: "#fff",
                  borderColor: "none",
                  color: "#000",
                  width: "70px",
                  marginRight: "10px",
                  fontWeight: "500",
                }}
              >
                Edit
              </Button>
              <Button
                type="primary"
                style={{
                  background: "red",
                  borderColor: "none",
                  color: "#fff",
                  width: "70px",
                  fontWeight: "500",
                }}
              >
                Delete
              </Button>
            </>
          )}
          <span
            style={{
              marginLeft: 8,
              color: "#fff",
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>

          <Input.Search
            placeholder="Search here..."
            style={{ width: "400px" }}
            onSearch={(value) => setSearchedText(value)}
            onChange={(e) => {
              setSearchedText(e.target.value);
            }}
          />
        </div>
        <Table
          rowSelection={rowSelection}
          columns={[
            {
              title: "FULL NAME",
              dataIndex: "fullname",
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return (
                  String(record.fullname)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.email)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.phone)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.name)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.userrole)
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
              title: "NAME",
              dataIndex: "name",
            },
            {
              title: "USER ROLE",
              dataIndex: "userrole",
            },
            {
              title: "EMAIL CONFIRM",
              dataIndex: "emailconfirm",
              render: (_, { emailconfirm }) => (
                <>
                  <PurpleSwitch checked={emailconfirm} />
                </>
              ),
            },
          ]}
          dataSource={dataSource}
          pagination={{
            position: [bottom],
            pageSize: 9,
          }}
          size="small"
        />
      </div>
    </div>
  );
};

export default Users;
