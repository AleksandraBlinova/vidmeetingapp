import React, { useState } from "react";

import { Form, Button, Radio, Space, Switch, Table } from "antd";

import AppBarComponent from "./AppBar";
import "../styles/EventTypes.css";

import { dataSource } from "../data/event-types";
import { columns } from "../data/event-types-table-columns";

const EventTypes = () => {
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
  return (
    <div className="event-types-container">
      <AppBarComponent />

      <div className="event-types-table-container">
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
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            position: [bottom],
          }}
          size="small"
        />{" "}
      </div>
    </div>
  );
};

export default EventTypes;
