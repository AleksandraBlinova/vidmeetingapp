import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FlagIcon from "@mui/icons-material/Flag";
import { IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import AddIcon from "@mui/icons-material/Add";

const buttons = [
  <Button key="one">All</Button>,
  <Button key="two">Favourites</Button>,
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
  },
  marginLeft: 0,
  border: "1px solid #9c27b0",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "58ch",
      "&:focus": {
        width: "58ch",
      },
    },
  },
}));

const ButtonsContact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",

        "& > *": {
          m: 1,
        },
      }}
    >
      <Grid item xs={8}>
        {" "}
        <ButtonGroup color="secondary">
          {buttons}{" "}
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#9c27b0" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </ButtonGroup>
        <IconButton>
          {" "}
          <FlagIcon />
        </IconButton>
        <IconButton>
          {" "}
          <FormatAlignCenterIcon />
        </IconButton>
        <IconButton>
          {" "}
          <ViewModuleIcon />
        </IconButton>
        <IconButton sx={{ color: "#fff", backgroundColor: "#9400EA" }}>
          {" "}
          <AddIcon />
        </IconButton>
      </Grid>
    </Box>
  );
};

export default ButtonsContact;
