// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Grid, TextField, Typography, Paper } from "@mui/material";

export const CalculoReducao = () => {
  const [valorProduto, setValorProduto] = useState(0);
  const [baseCalculo, setBaseCalculo] = useState(0);

  const calcularReducaoPercentual = () => {
    return valorProduto !== 0
      ? ((valorProduto - baseCalculo) / valorProduto) * 100
      : 0;
  };

  return (
    <Paper style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography variant="h5" gutterBottom>
        Cálculo da Redução
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Valor do Produto"
            type="number"
            fullWidth
            value={valorProduto}
            onChange={(e) => setValorProduto(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Base de Cálculo"
            type="number"
            fullWidth
            value={baseCalculo}
            onChange={(e) => setBaseCalculo(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Redução Percentual: {calcularReducaoPercentual().toFixed(2)}%
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
