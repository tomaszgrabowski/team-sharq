import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";

const Info: FC = ({ children }) => {
  return (
    <Grid container justifyContent={"center"}>
      <Typography fontWeight={"bold"}>{children}</Typography>
    </Grid>
  );
};

export default Info;
