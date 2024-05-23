import { Alert, Box } from "@mui/material";

export const GeneralAdvises = () => {
  return (
    <Box
      sx={{
        margin: "40px 0",
      }}
    >
      <Alert
        sx={{
          fontSize: "12px",
        }}
        variant="filled"
        severity="warning"
      >
        <strong>Aviso Importante:</strong> Esta calculadora pode ter pequenas
        variações nos resultados; para maior precisão, consulte um de nossos
        profissionais para garantir a exatidão desejada,
        <a
          href="https://api.whatsapp.com/send?phone=5511994453204"
          target="_blank"
          rel="noreferrer noopener"
        >
          <strong>
            <i> Clicando Aqui.</i>
          </strong>
        </a>
      </Alert>
    </Box>
  );
};
