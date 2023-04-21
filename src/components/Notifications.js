import React, { useState } from "react";

import { Table, Input } from "antd";

import AppBarComponent from "./AppBar";
import "../styles/Notifications.css";

import { dataSourceNotify } from "../data/notify-data";
import { purple } from "@mui/material/colors";

import Checkbox from "@mui/material/Checkbox";

const Notifications = () => {
  const [bottom, setBottom] = useState("bottomRight");
  const [searchedText, setSearchedText] = useState("");

  return (
    <div className="notify-container">
      <AppBarComponent />

      <div className="notify-table-container">
        {" "}
        <Input.Search
          placeholder="Search here..."
          style={{ width: "400px", marginBottom: "6px" }}
          onSearch={(value) => setSearchedText(value)}
          onChange={(e) => {
            setSearchedText(e.target.value);
          }}
        />
        <Table
          columns={[
            {
              title: "RECEIVER",
              dataIndex: "receiver",
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return (
                  String(record.receiver)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.email)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.title)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.message)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.date)
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
              title: "TITLE",
              dataIndex: "title",
            },
            {
              title: "MESSAGE",
              dataIndex: "message",
            },
            {
              title: "DATE",
              dataIndex: "date",
            },
            {
              title: "SENT",
              dataIndex: "sent",
              render: (_, { sent }) => (
                <>
                  <Checkbox
                    checked={sent}
                    sx={{
                      color: purple[800],
                      "&.Mui-checked": {
                        color: purple[600],
                      },
                    }}
                  />
                </>
              ),
            },
          ]}
          dataSource={dataSourceNotify}
          pagination={{
            position: [bottom],
          }}
          size="small"
        />
      </div>
    </div>
  );
};

export default Notifications;
