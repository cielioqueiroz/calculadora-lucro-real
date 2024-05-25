// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Typography, Paper } from "@mui/material";

export const Produto = () => {
  const [precoCompra, setPrecoCompra] = useState(0);
  const [percentualReducao, setPercentualReducao] = useState(0);
  const [percentualPis, setPercentualPis] = useState(0);
  const [percentualCofins, setPercentualCofins] = useState(0);
  const [percentualRetencao, setPercentualRetencao] = useState(0);
  const [precoLiquido, setPrecoLiquido] = useState(0);
  const [percentualDesconto, setPercentualDesconto] = useState(0);
  const [percentualMargem, setPercentualMargem] = useState(0);
  const [custoCompra, setCustoCompra] = useState(0);
  const [custoVenda, setCustoVenda] = useState(0);
  const [precoVendaBruta, setPrecoVendaBruta] = useState(0);
  const [indiceDivisor, setIndiceDivisor] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calcularCustoCompra = () => {
    const reducao = precoCompra * (percentualReducao / 100);
    const pis = precoCompra * (percentualPis / 100);
    const cofins = precoCompra * (percentualCofins / 100);
    const retencao = precoCompra * (percentualRetencao / 100);
    setCustoCompra(precoCompra - reducao - pis - cofins + retencao);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calcularPrecoVendaBruta = () => {
    if (percentualMargem === 100) {
      setPrecoVendaBruta(0);
    } else {
      setPrecoVendaBruta(custoCompra / (1 - percentualMargem / 100));
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calcularPrecoLiquido = () => {
    setPrecoLiquido(
      precoVendaBruta - precoVendaBruta * (percentualDesconto / 100)
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calcularCustoVenda = () => {
    setCustoVenda(custoCompra + precoLiquido * (indiceDivisor / 100));
  };

  useEffect(() => {
    calcularCustoCompra();
  }, [
    precoCompra,
    percentualReducao,
    percentualPis,
    percentualCofins,
    percentualRetencao,
    calcularCustoCompra,
  ]);

  useEffect(() => {
    calcularPrecoVendaBruta();
  }, [calcularPrecoVendaBruta, custoCompra, percentualMargem]);

  useEffect(() => {
    calcularPrecoLiquido();
  }, [precoVendaBruta, percentualDesconto, calcularPrecoLiquido]);

  useEffect(() => {
    calcularCustoVenda();
  }, [custoCompra, precoLiquido, indiceDivisor, calcularCustoVenda]);

  return (
    <Container maxWidth="md">
      <Paper style={{ padding: 16 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Produto</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Preço de Compra"
              type="number"
              fullWidth
              value={precoCompra}
              onChange={(e) => setPrecoCompra(parseFloat(e.target.value))}
            />
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
            <TextField
              label="Percentual de PIS"
              type="number"
              fullWidth
              value={percentualPis}
              onChange={(e) => setPercentualPis(parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Percentual de COFINS"
              type="number"
              fullWidth
              value={percentualCofins}
              onChange={(e) => setPercentualCofins(parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Percentual de Retenção"
              type="number"
              fullWidth
              value={percentualRetencao}
              onChange={(e) =>
                setPercentualRetencao(parseFloat(e.target.value))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Percentual de Desconto"
              type="number"
              fullWidth
              value={percentualDesconto}
              onChange={(e) =>
                setPercentualDesconto(parseFloat(e.target.value))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Percentual de Margem"
              type="number"
              fullWidth
              value={percentualMargem}
              onChange={(e) => setPercentualMargem(parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Índice Divisor"
              type="number"
              fullWidth
              value={indiceDivisor}
              onChange={(e) => setIndiceDivisor(parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              Custo de Compra: {custoCompra.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              Custo de Venda: {custoVenda.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              Preço de Venda Bruta: {precoVendaBruta.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              Preço Líquido: {precoLiquido.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
