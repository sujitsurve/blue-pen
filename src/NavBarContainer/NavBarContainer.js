import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CustomButton from "../Common/CustomButton";

const NavBarContainer = () => {
  const customStyle = {
    color: "#092949",
    textTransform: "none",
  };
  const primaryStyle = {
    textTransform: "none",
    padding: "0px 35px",
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <CustomButton color="inherit" style={customStyle}>
                  Home
                </CustomButton>
              </Grid>
              <Grid item>
                <CustomButton color="inherit" style={customStyle}>
                  About
                </CustomButton>
              </Grid>
              <Grid item>
                <CustomButton color="inherit" style={customStyle}>
                  Contact
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              sx={{ color: "#092949", fontWeight: "bold" }}
            >
              Landing
            </Typography>
          </Grid>
          <Grid item>
            <CustomButton variant="contained" style={primaryStyle}>
              Buy Now
            </CustomButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarContainer;
