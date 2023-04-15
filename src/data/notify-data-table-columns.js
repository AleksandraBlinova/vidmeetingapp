import { alpha, styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@mui/icons-material";
import { Button } from "antd";

import Checkbox from "@mui/material/Checkbox";

export const columns = [
  {
    title: "RECEIVER",
    dataIndex: "receiver",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <>
          <Input
            autoFocus
            placeholder="Type text here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
          <Button
            type="primary"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "0px",
            }}
            onClick={() => {
              confirm();
            }}
          >
            Search
          </Button>
        </>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.name.toLowerCase().includes(value.toLowerCase());
    },
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <>
          <Input
            autoFocus
            placeholder="Type text here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
          <Button
            type="primary"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "0px",
            }}
            onClick={() => {
              confirm();
            }}
          >
            Search
          </Button>
        </>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.email.toLowerCase().includes(value.toLowerCase());
    },
  },
  {
    title: "TITLE",
    dataIndex: "title",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <>
          <Input
            autoFocus
            placeholder="Type text here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
          <Button
            type="primary"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "0px",
            }}
            onClick={() => {
              confirm();
            }}
          >
            Search
          </Button>
        </>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.title.toLowerCase().includes(value.toLowerCase());
    },
  },
  {
    title: "MESSAGE",
    dataIndex: "message",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <>
          <Input
            autoFocus
            placeholder="Type text here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
          <Button
            type="primary"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "0px",
            }}
            onClick={() => {
              confirm();
            }}
          >
            Search
          </Button>
        </>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.message.toLowerCase().includes(value.toLowerCase());
    },
  },
  {
    title: "DATE",
    dataIndex: "date",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <>
          <Input
            autoFocus
            placeholder="Type text here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
          <Button
            type="primary"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "0px",
            }}
            onClick={() => {
              confirm();
            }}
          >
            Search
          </Button>
        </>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.date.toLowerCase().includes(value.toLowerCase());
    },
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
];
