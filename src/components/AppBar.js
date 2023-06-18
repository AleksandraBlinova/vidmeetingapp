import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import EventIcon from "@mui/icons-material/Event";
import CallIcon from "@mui/icons-material/Call";
import ContactsIcon from "@mui/icons-material/Contacts";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Grid, Link } from "@mui/material";
import { purple } from "@mui/material/colors";

import Navbar from "./NavBar";
import { Button } from "react-admin";

const AppBarComponent = (props) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    localStorage.setItem("rolee", 0);
    localStorage.setItem("currentUserEmail", "");
    localStorage.setItem("currentUserPhone", "");
  };

  const [currentUserEmail, setcurrentUserEmail] = useState(
    localStorage.getItem("currentUserEmail")
  );

  return (
    <div>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#010002" }}>
          <Toolbar>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ bgcolor: purple[700] }}>
                  {currentUserEmail == "blinova@gmail.com" ? "AB" : "HS"}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                paddingLeft: "10px",
                fontFamily: "Poppins",
                fontSize: "1rem",
              }}
            >
              {currentUserEmail == "blinova@gmail.com"
                ? "Aleksandra Blinova"
                : "Hadi Saleh"}
            </Typography>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1,
                  "& .MuiAvatar-root": {
                    width: 18,
                    height: 18,
                    ml: -1,
                    mr: 4,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Button href="/user">
                  <Avatar /> Profile
                </Button>

                {/* <Button>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </Button> */}
                <Button href="/" onClick={handleSubmit}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </Button>
              </Grid>
            </Menu>
            <Navbar />
            <Box>
              <img
                src="./logo.png"
                style={{
                  width: "80px",
                  height: "40px",
                  float: "left",
                  marginRight: "30px",
                }}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default AppBarComponent;
