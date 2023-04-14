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

export const columns = [
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
