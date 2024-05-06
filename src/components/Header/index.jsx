import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../../public/img/logo.png";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#0D253D" }} position="static">
        <Toolbar>
          <img
            src={logo}
            alt="logo"
            style={{ width: "130px", marginRight: "20px" }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calculando Preço - Lucro Real
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
