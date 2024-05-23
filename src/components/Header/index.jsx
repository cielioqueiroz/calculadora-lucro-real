import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../../public/img/logo.png";
import { Container } from "@mui/material";

export const Header = () => {
  return (
    <Box sx={{ backgroundColor: "#0D253D", flexGrow: 1 }}>
      <Container maxWidth="lg">
        <AppBar
          style={{ backgroundColor: "#0D253D", textAlign: "center" }}
          position="static"
          elevation={0}
        >
          <Toolbar>
            <img
              src={logo}
              alt="logo"
              style={{ width: "130px", marginRight: "20px" }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "25px" }}
            >
              Calculando Preço - Lucro Real
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};
