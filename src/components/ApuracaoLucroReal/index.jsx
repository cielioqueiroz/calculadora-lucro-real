import React from 'react';
import { Typography, Box } from '@mui/material';

export const ApuracaoLucroReal = ({ resultado }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Apuração do Lucro Real
      </Typography>
      <Typography variant="body1">
        Preço Vendido: R$ {resultado.precoVendido.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        (-) ICMS Venda: R$ {resultado.icmsVenda.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        (-) PIS / COFINS: R$ {resultado.pisCofinsVenda.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Subtotal: R$ {resultado.subtotal.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        (-) CMV: R$ {resultado.cmv.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Lucro Contábil: R$ {resultado.lucroContabil.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Despesas: R$ {resultado.despesas.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Lucro Bruto: R$ {resultado.lucroBruto.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        IRPJ: R$ {resultado.irpj.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        CSLL: R$ {resultado.csll.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Lucro Líquido Real: R$ {resultado.lucroLiquidoReal.toFixed(2)}
      </Typography>
      <Typography variant="body1">
        Índice do Lucro Líquido: {resultado.indiceLucroLiquido.toFixed(2)}%
      </Typography>
    </Box>
  );
}


