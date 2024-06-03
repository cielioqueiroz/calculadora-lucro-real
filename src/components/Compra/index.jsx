import React from 'react';
import { TextField, Grid, Typography } from '@mui/material';

export const Compra = ({ compra, setCompra, produto }) => {

  const handleChange = (e) => {
    setCompra({ ...compra, [e.target.name]: e.target.value });
  };

  const precoCompra = parseFloat(produto.precoCompra) || 0;
  const calcularValor = (percentual) => (precoCompra * (parseFloat(percentual) / 100)).toFixed(2);
  const calcularReducao = () => {
    const icms = precoCompra * (parseFloat(compra.icms) / 100);
    const reducao = icms * (parseFloat(compra.reducao) / 100);
    return (icms - reducao).toFixed(2);
  };

  return (
    <div>
      <Typography variant="h6">Compra</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="IPI (%)"
            name="ipi"
            value={compra.ipi}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="IPI (R$)"
            value={calcularValor(compra.ipi)}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Frete (%)"
            name="frete"
            value={compra.frete}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Frete (R$)"
            value={calcularValor(compra.frete)}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="ICMS (%)"
            name="icms"
            value={compra.icms}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="ICMS (R$)"
            value={calcularValor(compra.icms)}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Redução (%)"
            name="reducao"
            value={compra.reducao}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Redução (R$)"
            value={calcularReducao()}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="PIS/COFINS (%)"
            name="pisCofins"
            value={compra.pisCofins}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="PIS/COFINS (R$)"
            value={calcularValor(compra.pisCofins)}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Retenção (%)"
            name="retencao"
            value={compra.retencao}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Retenção (R$)"
            value={calcularValor(compra.retencao)}
            fullWidth
            disabled
          />
        </Grid>
      </Grid>
    </div>
  );
}


