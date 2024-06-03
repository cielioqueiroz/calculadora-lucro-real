import React, { useState, useEffect } from 'react';
import { TextField, Grid, Typography } from '@mui/material';

export const CalculoReducao = ({ calculoReducao, setCalculoReducao }) => {

  const handleChange = (e) => {
    setCalculoReducao({ ...calculoReducao, [e.target.name]: e.target.value });
  };

  const calcularReducao = () => {
    const valorProduto = parseFloat(calculoReducao.valorProduto) || 0;
    const baseCalculo = parseFloat(calculoReducao.baseCalculo) || 0;
    if (valorProduto === 0) {
      return 0;
    }
    return (((valorProduto - baseCalculo) / valorProduto) * 100).toFixed(2);
  };

  useEffect(() => {
    setCalculoReducao({ ...calculoReducao, reducao: calcularReducao() });
  }, [calculoReducao.valorProduto, calculoReducao.baseCalculo]);

  return (
    <div>
      <Typography variant="h6">Cálculo da Redução</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Valor do Produto (R$)"
            name="valorProduto"
            value={calculoReducao.valorProduto}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Base de Cálculo (R$)"
            name="baseCalculo"
            value={calculoReducao.baseCalculo}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Redução (%)"
            name="reducao"
            value={calculoReducao.reducao}
            fullWidth
            disabled
          />
        </Grid>
      </Grid>
    </div>
  );
}


