import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FormProductValue } from "./components/FormProductValue";
import { GeneralAdvises } from "./components/FeedBack/GeneralAdvises";
import { TextGenerator } from "./components/TextGenerator";
import { Box, Container } from "@mui/material";
import { ModalAlert } from "./components/ModalAlert";
import { useState } from "react";

export const App = () => {
  const [value, setValue] = useState("");
  console.log(value);

  function handleChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <ModalAlert />
      <Header />
      <Container maxWidth="lg">
        <Box>
          <GeneralAdvises />

          <hr />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 0 40px 0",
              padding: "20px 0",
            }}
          >
            <TextGenerator />
          </div>

          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                width: "30%",
                paddingRight: "15px",
              }}
            >
              <FormProductValue compra={value} onChangeValue={handleChange} />
            </div>

            <div
              style={{
                width: "70%",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", border:"1px solid"}}>
                <div style={{width:"100%", textAlign:"center", padding: "15px", border:"1px solid"}}>
                  <h2>Compra</h2>
                </div>
                <div style={{ display: "flex"}}>
                  <div style={{width:"33%"}}>Tributação</div>
                  <div style={{width:"33%"}}>Percentual</div>
                  <div style={{width:"33%"}}>Valor</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{width:"33%"}}>IPI</div>
                  <div style={{width:"33%"}}>
                    <input type="text" value="0,02%" />
                  </div>
                  <div style={{width:"33%"}}>
                    <input type="text" value="0,02%" />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
