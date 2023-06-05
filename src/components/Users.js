import React, { useState, useEffect } from "react";

import { Button, Table, Input } from "antd";
import { alpha, styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import axios from "axios";

import AppBarComponent from "./AppBar";

import "../styles/Users.css";

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

  const [users, setUsers] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://16.16.80.197:8080/users",
    })
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              title: "FIRST NAME",
              dataIndex: "first_name",
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return (
                  String(record.first_name)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.last_name)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.email)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.phone_number)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.nickname).toLowerCase()
                  //   .includes(value.toLowerCase()) ||
                  // String(record.userrole)
                  //   .toLowerCase()
                  //   .includes(value.toLowerCase())
                );
              },
            },
            {
              title: "LAST NAME",
              dataIndex: "last_name",
            },
            {
              title: "EMAIL",
              dataIndex: "email",
            },
            {
              title: "PHONE",
              dataIndex: "phone_number",
            },
            {
              title: "NICKNAME",
              dataIndex: "nickname",
            },
            // {
            //   title: "USER ROLE",
            //   dataIndex: "userrole",
            // },
            // {
            //   title: "EMAIL CONFIRM",
            //   dataIndex: "emailconfirm",
            //   render: (_, { emailconfirm }) => (
            //     <>
            //       <PurpleSwitch checked={emailconfirm} />
            //     </>
            //   ),
            // },
          ]}
          dataSource={users}
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
