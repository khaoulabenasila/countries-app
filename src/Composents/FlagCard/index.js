import { Box, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import useStyle from "./style";

const FlagCard = ({ countryInfo }) => {
  const classes = useStyle();
  return (
    <div>
      <img src={countryInfo.flags.png} alt={countryInfo.name.common} />
    </div>
  );
};
export default FlagCard;
