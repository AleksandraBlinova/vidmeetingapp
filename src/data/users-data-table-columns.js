import { alpha, styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@mui/icons-material";
import { Button } from "antd";

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

export const columns = [
  {
    title: "FULL NAME",
    dataIndex: "fullname",
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
    title: "PHONE",
    dataIndex: "phone",
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
      return record.phone == value;
    },
  },
  {
    title: "NAME",
    dataIndex: "name",
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
    title: "USER ROLE",
    dataIndex: "userrole",
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
      return record.userrole.toLowerCase().includes(value.toLowerCase());
    },
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
];
