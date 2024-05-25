import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid transparent",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export const ModalAlert = () => {
  const [open, setOpen] = useState(true);
  const [lead, setLead] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  useEffect(() => {
    if (localStorage.getItem("name") && localStorage.getItem("email")) {
      setOpen(false);
    }
  }, []);

  const validateForm = () => {
    const newErrors = {
      name: lead.name === "",
      email: lead.email === "",
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("name", lead.name);
      localStorage.setItem("email", lead.email);
      setOpen(false);
    }
  };

  const handleCancel = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Desbloqueie a Calculadora
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Preencha abaixo os dados para acessar a Calculadora.
            </Typography>
            <Box sx={{ marginBottom: "50px" }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ padding: "20px 0" }}>
                  <TextField
                    id="filled-basic"
                    label="Nome"
                    variant="filled"
                    fullWidth
                    name="nome"
                    value={lead.name}
                    error={errors.name}
                    helperText={errors.name ? "Campo obrigatório" : ""}
                    onChange={(e) => setLead({ ...lead, name: e.target.value })}
                  />
                </Box>
                <Box sx={{ paddingBottom: "20px" }}>
                  <TextField
                    id="filled-basic"
                    label="E-mail"
                    variant="filled"
                    fullWidth
                    name="email"
                    value={lead.email}
                    error={errors.email}
                    helperText={errors.email ? "Campo obrigatório" : ""}
                    onChange={(e) =>
                      setLead({ ...lead, email: e.target.value })
                    }
                  />
                </Box>
                <Button
                  sx={{
                    borderRadius: "20px",
                    height: "45px",
                    backgroundColor: "#0D253D",
                    "&:hover": {
                      backgroundColor: "#012447",
                    },
                  }}
                  variant="contained"
                  disableElevation
                  type="submit"
                >
                  Desbloquear Calculadora
                </Button>

                <Button
                  sx={{
                    borderRadius: "20px",
                    height: "45px",
                    color: "#0D253D",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  variant="contained"
                  disableElevation
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </form>
            </Box>
            <Typography
              variant="body2"
              id="transition-modal-description"
              sx={{ textAlign: "center", marginTop: "20px" }}
            >
              Asseguramos que sua privacidade está segura e que não enviaremos
              mensagens não desejadas,
              <a href="#">
                <b> leia nossa política de privacidade.</b>
              </a>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
