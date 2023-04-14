import React, { useState } from "react";

import { Form, Button, Radio, Space, Switch, Table } from "antd";

import AppBarComponent from "./AppBar";
import "../styles/Users.css";

const columns = [
  {
    title: "FULL NAME",
    dataIndex: "fullname",
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
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    fullname: `Aleksandra Blinova`,
    email: "aleksa-blinova@mail.ru",
    phone: `89106670607`,
    name: `sasha123`,
    userrole: `admin`,
  });
}

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
        <div>
          {hasSelected && (
            <Button
              type="primary"
              style={{ background: "#fff", borderColor: "none", color: "#000" }}
              onClick={start}
              loading={loading}
            >
              Edit
            </Button>
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
          dataSource={data}
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
