import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

const Options = () => {
  const [userMenuItems, setUserMenuItems] = useState([
    { id: "0", option: "Events" },
    { id: "1", option: "Contacts" },
    { id: "2", option: "Users" },
    { id: "3", option: "Email" },
    { id: "4", option: "Notifications" },
    { id: "5", option: "Chat" },
    { id: "6", option: "Calls" },
  ]);

  const [color, setColors] = React.useState("");

  const handleClickButton = (name) => {};

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState("Events");
  const handleListItemClick = (options) => {
    setSelectedIndex(options.id);
    setSelectedOption(options.option);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={6}>
          <div className="user-container">
            <div className="options">
              <p className="options-p">{selectedOption}</p>
            </div>

            <div className="user-menu">
              {userMenuItems.map((options) => (
                <div
                  className="user-menu-item"
                  style={{
                    background:
                      options.id === selectedIndex
                        ? "linear-gradient(0deg, #9400EA 0%, #237CE7 100%)"
                        : "#ebefef",
                    cursor: "pointer",
                  }}
                  key={options.id}
                  onClick={() => {
                    handleListItemClick(options);
                  }}
                >
                  <p className="user-menu-item-p">
                    {options.option.toString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Options;
