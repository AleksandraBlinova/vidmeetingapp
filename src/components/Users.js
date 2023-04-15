import React, { useState } from "react";

import { Form, Button, Radio, Space, Switch, Table } from "antd";

import AppBarComponent from "./AppBar";
import "../styles/Users.css";

import { dataSource } from "../data/users-data";
import { columns } from "../data/users-data-table-columns";

const Users = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

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
    <div className="users-container">
      <AppBarComponent />

      <div className="users-table-container">
        {" "}
        <div className="users-table-container-header">
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
                }}
                onClick={start}
                loading={loading}
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
                }}
                onClick={start}
                loading={loading}
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
        />
      </div>
    </div>
  );
};

export default Users;
