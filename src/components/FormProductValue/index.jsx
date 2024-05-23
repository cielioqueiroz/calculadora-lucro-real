import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
export const FormProductValue = ({onChangeValue, compra}) => {
  return (
    <form>
      <h2>Protudo</h2>

      <FormControl
        fullWidth
        sx={{
          margin: "35px 0 20px 0",
          borderBottom: "1px solid #bdbdbd",
          paddingBottom: "35px",
        }}
      >
        <InputLabel htmlFor="outlined-adornment-amount">
          Preço de Compra
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          label="Preço de Compra"
          value={compra}
          onChange={onChangeValue}
        />
      </FormControl>

      <FormControl fullWidth sx={{ margin: "20px 0" }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          Custo de Compra
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          label="Custo de Compra"
        />
      </FormControl>

      <FormControl fullWidth sx={{ margin: "20px 0" }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          Custo de Venda
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          label="Custo de Venda"
        />
      </FormControl>

      <FormControl fullWidth sx={{ margin: "20px 0" }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          Preço de Venda Bruta
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          label="Preço de Venda Bruta"
        />
      </FormControl>

      <FormControl fullWidth sx={{ margin: "20px 0" }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          Preço Liquido
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          label="Preço Liquido"
        />
      </FormControl>
    </form>
  );
};
