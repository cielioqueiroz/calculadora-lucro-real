import React from 'react';
import { TextField, Typography } from '@mui/material';

export const Produto = ({ produto, setProduto }) => {
  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Typography variant="h5">Produto</Typography>
      <TextField
        label="Preço de Compra (R$)"
        name="precoCompra"
        value={produto.precoCompra}
        onChange={handleChange}
        fullWidth
      />
    </div>
  );
}


