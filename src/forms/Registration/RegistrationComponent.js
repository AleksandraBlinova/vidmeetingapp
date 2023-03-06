import React from "react";
import useForm from "../useForm";
import "./RegistrationComponent.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import { styled } from "@mui/material/styles";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

const RegistrationComponent = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up-container">
      <div className="form-sign-up-block">
        <div className="form-sign-up-block-title">
          <h1>Register</h1>
        </div>
        <div className="container-form-fields-sign-up">
          <div className="form-field-first-name">
            {" "}
            <FormControl
              sx={{
                m: 1,
                width: "38ch",
                backgroundColor: "#fff",
                borderRadius: "15px",
                border: "none",
              }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="First Name"
              />
            </FormControl>
            <FormControl
              sx={{
                m: 1,
                width: "38ch",
                backgroundColor: "#fff",
                borderRadius: "15px",
                border: "none",
              }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Last Name"
              />
            </FormControl>
          </div>
          <div className="form-field-email">
            {" "}
            <FormControl
              sx={{
                m: 1,
                width: "38ch",
                backgroundColor: "#fff",
                borderRadius: "15px",
                border: "none",
              }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Email"
              />
            </FormControl>
          </div>
          <div className="form-field-password">
            {" "}
            <FormControl
              sx={{
                m: 1,
                width: "38ch",
                backgroundColor: "#fff",
                borderRadius: "15px",
                border: "none",
              }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="form-field-re-enter-password">
            {" "}
            <FormControl
              sx={{
                m: 1,
                width: "38ch",
                backgroundColor: "#fff",
                borderRadius: "15px",
                border: "none",
              }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Re-enter password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <div className="already-have-account-container">
          <h3>Already a user? LOG IN</h3>
        </div>
        <div className="btn-submit">
          {" "}
          <Button
            variant="contained"
            style={{
              float: "right",
              marginRight: "1em",
              marginTop: "1em",
              fontFamily: "Segoe UI",
              fontSize: "16px",
              font: "bold",
              color: "#ffffff",
              backgroundColor: "#A20BFF",
              width: "15ch",
            }}
          >
            SUBMIT
          </Button>
        </div>
      </div>
      <div className="logo">
        <img src="./logo.png" className="image-logo" />
      </div>
    </div>
  );
};

export default RegistrationComponent;
