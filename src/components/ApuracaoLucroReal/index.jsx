// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import { Typography, Paper } from "@mui/material";

export const ApuracaoLucroReal = ({precoLiquido, icmsVenda, pisVenda, cofinsVenda, custoCompra, despesasFixas, irpj, csll}) => {
  const calcularSubtotal = () =>
    precoLiquido - icmsVenda - pisVenda - cofinsVenda;
  const calcularLucroContabil = () => calcularSubtotal() - custoCompra;
  const calcularLucroBruto = () => calcularLucroContabil() - despesasFixas;
  const calcularLucroLiquido = () => calcularLucroBruto() - irpj - csll;
  const calcularIndiceLucroLiquido = () =>
    precoLiquido !== 0 ? calcularLucroLiquido() / precoLiquido : 0;

  return (
    <Paper style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography variant="h5" gutterBottom>
        Apuração do Lucro Real
      </Typography>
      <Typography variant="body1">
        Subtotal: {calcularSubtotal().toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Lucro Contábil: {calcularLucroContabil().toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Despesas Fixas: {despesasFixas.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Lucro Bruto: {calcularLucroBruto().toFixed(2)}
      </Typography>
      <Typography variant="body1">IRPJ: {irpj.toFixed(2)}</Typography>
      <Typography variant="body1">
        Contribuição Social: {csll.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Lucro Líquido: {calcularLucroLiquido().toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Índice do Lucro Líquido: {calcularIndiceLucroLiquido().toFixed(2)}
      </Typography>
    </Paper>
  );
};

ApuracaoLucroReal.propTypes = {
  precoLiquido: PropTypes.number.isRequired,
  icmsVenda: PropTypes.number.isRequired,
  pisVenda: PropTypes.number.isRequired,
  cofinsVenda: PropTypes.number.isRequired,
  custoCompra: PropTypes.number.isRequired,
  despesasFixas: PropTypes.number.isRequired,
  irpj: PropTypes.number.isRequired,
  csll: PropTypes.number.isRequired
};
