import React, { useState, useEffect } from 'react';
import { TextField, Grid, Typography } from '@mui/material';

export const Venda = ({ venda, setVenda, resultado }) => {
  const handleChange = (e) => {
    setVenda({ ...venda, [e.target.name]: e.target.value });
  };

  const precoLiquido = parseFloat(resultado.precoLiquido) || 0;
  const calcularValor = (percentual) => (precoLiquido * (parseFloat(percentual) / 100)).toFixed(2);

  useEffect(() => {
    setVenda((prevVenda) => ({
      ...prevVenda,
      valorICMS: calcularValor(prevVenda.icms),
      valorReducao: calcularValor(prevVenda.reducao),
      valorSimples: calcularValor(prevVenda.simples),
      valorPIS: calcularValor(prevVenda.pis),
      valorCOFINS: calcularValor(prevVenda.cofins),
      valorIRPJ: calcularValor(prevVenda.irpj),
      valorCSocial: calcularValor(prevVenda.cSocial),
      valorDFixa: calcularValor(prevVenda.dFixa),
      valorMargem: calcularValor(prevVenda.margem),
      valorDesconto: calcularValor(prevVenda.desconto)
    }));
  }, [venda.icms, venda.reducao, venda.simples, venda.pis, venda.cofins, venda.irpj, venda.cSocial, venda.dFixa, venda.margem, venda.desconto, precoLiquido]);

  return (
    <div>
      <Typography variant="h6">Venda</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="ICMS (%)"
            name="icms"
            value={venda.icms}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="ICMS (R$)"
            value={venda.valorICMS || ''}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Redução (%)"
            name="reducao"
            value={venda.reducao}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Redução (R$)"
            value={venda.valorReducao || ''}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Simples (%)"
            name="simples"
            value={venda.simples}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Simples (R$)"
            value={venda.valorSimples || ''}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="PIS (%)"
            name="pis"
            value={venda.pis}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="PIS (R$)"
            value={venda.valorPIS || ''}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="COFINS (%)"
            name="cofins"
            value={venda.cofins}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="COFINS (R$)"
            value={venda.valorCOFINS || ''}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="IRPJ (%)"
            name="irpj"
            value={venda.irpj}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="IRPJ (R$)"
            value={venda.valorIRPJ || ''}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="C.Social (%)"
            name="cSocial"
            value={venda.cSocial}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="C.Social (R$)"
            value={venda.valorCSocial || ''}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Despesas Fixa (%)"
            name="dFixa"
            value={venda.dFixa}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Despesas Fixa (R$)"
            value={venda.valorDFixa || ''}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Margem (%)"
            name="margem"
            value={venda.margem}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Margem (R$)"
            value={venda.valorMargem || ''}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Desconto (%)"
            name="desconto"
            value={venda.desconto}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Desconto (R$)"
            value={venda.valorDesconto || ''}
            fullWidth
            disabled
          />
        </Grid>
      </Grid>
    </div>
  );
}


