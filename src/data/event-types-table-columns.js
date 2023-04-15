import { alpha, styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@mui/icons-material";
import { Button } from "antd";

export const columns = [
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
];
