import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const AppBarComponent = () => {
  return (
    <div>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#010002" }}>
          <Toolbar>
            <IconButton sx={{ p: 2 }}>
              <Avatar alt="Remy Sharp" />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              User Name
            </Typography>
            <Box>
              <img src="./logo.png" style={{ width: "80px", height: "40px" }} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default AppBarComponent;
