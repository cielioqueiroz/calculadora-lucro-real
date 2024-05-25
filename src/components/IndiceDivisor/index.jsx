// eslint-disable-next-line no-unused-vars
import React from "react";
import { Typography, Paper } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const IndiceDivisor = ({ percentualIcms, percentualReducao, percentualSimples, percentualPis, percentualCofins }) => {
  const calcularIndiceDivisor = () => {
    return (
      percentualIcms -
      percentualReducao +
      percentualSimples +
      percentualPis +
      percentualCofins
    );
  };

  return (
    <Paper style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography variant="h5" gutterBottom>
        Índice Divisor
      </Typography>
      <Typography variant="body1">
        Índice Divisor: {calcularIndiceDivisor().toFixed(2)}
      </Typography>
    </Paper>
  );
};
