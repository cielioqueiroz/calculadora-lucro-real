// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Grid, TextField, Typography, Paper } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const Venda = ({ precoLiquido }) => {
  const [percentualIcmsVenda, setPercentualIcmsVenda] = useState(0);
  const [percentualReducaoVenda, setPercentualReducaoVenda] = useState(0);
  const [percentualSimples, setPercentualSimples] = useState(0);
  const [percentualPisVenda, setPercentualPisVenda] = useState(0);
  const [percentualCofinsVenda, setPercentualCofinsVenda] = useState(0);
  const [percentualIrpj, setPercentualIrpj] = useState(0);
  const [percentualCSocial, setPercentualCSocial] = useState(0);
  const [percentualDespesasFixas, setPercentualDespesasFixas] = useState(0);
  const [percentualMargem, setPercentualMargem] = useState(0);
  const [percentualDesconto, setPercentualDesconto] = useState(0);

  const calcularIcmsVenda = () => precoLiquido * (percentualIcmsVenda / 100);
  const calcularReducaoVenda = () =>
    precoLiquido * (percentualReducaoVenda / 100);
  const calcularSimples = () => precoLiquido * (percentualSimples / 100);
  const calcularPisVenda = () => precoLiquido * (percentualPisVenda / 100);
  const calcularCofinsVenda = () =>
    precoLiquido * (percentualCofinsVenda / 100);
  const calcularDespesasFixas = () =>
    precoLiquido * (percentualDespesasFixas / 100);
  const calcularIrpj = (lucroBruto) =>
    lucroBruto > 0 ? lucroBruto * (percentualIrpj / 100) : 0;
  const calcularCSocial = (lucroBruto) =>
    lucroBruto > 0 ? lucroBruto * (percentualCSocial / 100) : 0;

  return (
    <Paper style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography variant="h5" gutterBottom>
        Venda
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de ICMS (Venda)"
            type="number"
            fullWidth
            value={percentualIcmsVenda}
            onChange={(e) => setPercentualIcmsVenda(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor ICMS (Venda): {calcularIcmsVenda().toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de Redução (Venda)"
            type="number"
            fullWidth
            value={percentualReducaoVenda}
            onChange={(e) =>
              setPercentualReducaoVenda(parseFloat(e.target.value))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor Redução (Venda): {calcularReducaoVenda().toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de Simples"
            type="number"
            fullWidth
            value={percentualSimples}
            onChange={(e) => setPercentualSimples(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor Simples: {calcularSimples().toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de PIS (Venda)"
            type="number"
            fullWidth
            value={percentualPisVenda}
            onChange={(e) => setPercentualPisVenda(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor PIS (Venda): {calcularPisVenda().toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de COFINS (Venda)"
            type="number"
            fullWidth
            value={percentualCofinsVenda}
            onChange={(e) =>
              setPercentualCofinsVenda(parseFloat(e.target.value))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor COFINS (Venda): {calcularCofinsVenda().toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de IRPJ"
            type="number"
            fullWidth
            value={percentualIrpj}
            onChange={(e) => setPercentualIrpj(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor IRPJ: {calcularIrpj(precoLiquido).toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de Contribuição Social"
            type="number"
            fullWidth
            value={percentualCSocial}
            onChange={(e) => setPercentualCSocial(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Valor Contribuição Social:{" "}
            {calcularCSocial(precoLiquido).toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Percentual de Despesas Fixas"
            type="number"
            fullWidth
            value={percentualDespesasFixas}
            onChange={(e) =>
              setPercentualDespesasFixas(parseFloat(e.target.value))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Despesas Fixas: {calcularDespesasFixas().toFixed(2)}
          </Typography>
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
            label="Percentual de Desconto"
            type="number"
            fullWidth
            value={percentualDesconto}
            onChange={(e) => setPercentualDesconto(parseFloat(e.target.value))}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
