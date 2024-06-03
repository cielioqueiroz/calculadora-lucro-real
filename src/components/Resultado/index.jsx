import React from 'react';
import { Typography, Box } from '@mui/material';

export const Resultado = ({ resultado }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Resultado
      </Typography>
      <Typography variant="body1">
        Custo de Compra: R$ {resultado.custoCompra.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Custo de Venda: R$ {resultado.custoVenda.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Preço de Venda Bruta: R$ {resultado.precoVendaBruta.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Preço Líquido: R$ {resultado.precoLiquido.toFixed(2)}
      </Typography>
    </Box>
  );
}


