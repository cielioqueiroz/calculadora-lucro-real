import { AppBar, Toolbar, Typography, Grid, Box } from "@mui/material";
import logo from "../../../public/img/logo.png";
export const Footer = () => {
  function getYear() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }

  return (
    <AppBar
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "#0D253D",
        textAlign: "center",
        padding: "4px 0",
      }}
      position="static"
      color="primary"
    >
      <Toolbar>
        <Grid container sx={{ width: "100%", alignItems: "center" }}>
          <Grid item xs={5} sx={{ textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#ffffff",
                fontWeight: "normal",
              }}
              variant="body1"
              color="inherit"
            >
              © {getYear()} Player Contabilidade. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            <Box component="img" src={logo} alt="Logo" sx={{ height: 40 }} />{" "}
            {/* Ajuste o tamanho conforme necessário */}
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#ffffff",
                fontWeight: "normal",
              }}
              variant="body1"
              color="inherit"
            >
              CNPJ 33.036.816/0001-24 | CRC -TO 000580/0-8 | CRA-TO 20-03828
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
