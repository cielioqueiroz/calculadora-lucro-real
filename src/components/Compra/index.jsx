// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography, Paper } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const Compra = ({ precoCompra }) => {
  const [percentualIpi, setPercentualIpi] = useState(0);
  const [percentualFrete, setPercentualFrete] = useState(0);
  const [percentualIcms, setPercentualIcms] = useState(0);
  const [percentualReducao, setPercentualReducao] = useState(0);
  const [percentualPisCofins, setPercentualPisCofins] = useState(0);
  const [percentualRetencao, setPercentualRetencao] = useState(0);

  const [valorIpi, setValorIpi] = useState(0);
  const [valorFrete, setValorFrete] = useState(0);
  const [valorIcms, setValorIcms] = useState(0);
  const [valorReducaoCompra, setValorReducaoCompra] = useState(0);
  const [valorPisCofins, setValorPisCofins] = useState(0);
  const [valorRetencao, setValorRetencao] = useState(0);

  useEffect(() => {
    setValorIpi(precoCompra * (percentualIpi / 100));
  }, [percentualIpi, precoCompra]);

  useEffect(() => {
    setValorFrete(precoCompra * (percentualFrete / 100));
  }, [percentualFrete, precoCompra]);

  useEffect(() => {
    const icms = precoCompra * (percentualIcms / 100);
    setValorIcms(icms);
    setValorReducaoCompra(icms - icms * (percentualReducao / 100));
  }, [percentualIcms, percentualReducao, precoCompra]);

  useEffect(() => {
    setValorPisCofins(precoCompra * (percentualPisCofins / 100));
  }, [percentualPisCofins, precoCompra]);

  useEffect(() => {
    setValorRetencao(precoCompra * (percentualRetencao / 100));
  }, [percentualRetencao, precoCompra]);

  return (
    <Paper style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography variant="h5" gutterBottom>
        Compra
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de IPI"
            type="number"
            fullWidth
            value={percentualIpi}
            onChange={(e) => setPercentualIpi(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor IPI: {valorIpi.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de Frete"
            type="number"
            fullWidth
            value={percentualFrete}
            onChange={(e) => setPercentualFrete(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor Frete: {valorFrete.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de ICMS"
            type="number"
            fullWidth
            value={percentualIcms}
            onChange={(e) => setPercentualIcms(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor ICMS: {valorIcms.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de Redução"
            type="number"
            fullWidth
            value={percentualReducao}
            onChange={(e) => setPercentualReducao(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Redução Compra: {valorReducaoCompra.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de PIS/COFINS"
            type="number"
            fullWidth
            value={percentualPisCofins}
            onChange={(e) => setPercentualPisCofins(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor PIS/COFINS: {valorPisCofins.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de Retenção"
            type="number"
            fullWidth
            value={percentualRetencao}
            onChange={(e) => setPercentualRetencao(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor Retenção: {valorRetencao.toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
