import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CustomButton from "../Common/CustomButton";

const Section = () => {
  const primaryStyle = {
    textTransform: "none",
    width: "170px",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        maxWidth: 500,
        minHeight: "100vh",
        flexDirection: "column",
        marginLeft: "4rem",
      }}
    >
      {/* Title */}
      {/* Title */}
      <Typography
        variant="h4"
        gutterBottom
        style={{ marginBottom: "1rem", fontWeight: "bold" }}
      >
        Introduce Your Product Quickly & Effectively
      </Typography>

      {/* Lorem Text */}
      <Typography
        variant="body1"
        gutterBottom
        style={{ marginBottom: "2rem", color: "gray" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        eleifend arcu. Sed tincidunt, sem quis ultricies volutpat, urna ligula
        hendrerit justo, quis feugiat sapien est vel urna.
      </Typography>

      {/* Horizontal Buttons */}
      <Grid container spacing={2}>
        <Grid item>
          <CustomButton
            variant="contained"
            color="primary"
            style={primaryStyle}
          >
            Purchase UI Kit
          </CustomButton>
        </Grid>
        <Grid item>
          <CustomButton
            variant="outlined"
            color="primary"
            style={{ ...primaryStyle, color: "#092949" }}
          >
            Learn more
          </CustomButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section;
