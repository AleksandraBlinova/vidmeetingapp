import React, { useState } from "react";

import { Form, Button, Radio, Space, Switch, Table } from "antd";

import AppBarComponent from "./AppBar";
import "../styles/Notifications.css";

import { dataSourceNotify } from "../data/notify-data";
import { columns } from "../data/notify-data-table-columns";

const Notifications = () => {
  const [bottom, setBottom] = useState("bottomRight");

  return (
    <div className="notify-container">
      <AppBarComponent />

      <div className="notify-table-container">
        {" "}
        <Table
          columns={columns}
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
