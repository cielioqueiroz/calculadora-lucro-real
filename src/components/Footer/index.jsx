import { AppBar, Toolbar, Typography } from "@mui/material";

export const Footer = () => {
 
  function getYear() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }

  return (
    <AppBar
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: "#0D253D",
        textAlign: "center",
      }}
      position="static"
      color="primary"
    >
      <Toolbar>
        <Typography
          sx={{
            flexGrow: 1,
            fontSize: "18px",
            color: "#ffffff",
            textAlign: "center",
          }}
          variant="body1"
          color="inherit"
        >
          Player Contabilidade © {getYear()} - Todos os direitos reservados.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
