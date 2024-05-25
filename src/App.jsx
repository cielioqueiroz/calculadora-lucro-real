// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import { Produto } from "./components/Produto";
import { Compra } from "./components/Compra";
import { Venda } from "./components/Venda";
import { IndiceDivisor } from "./components/IndiceDivisor";
import { ApuracaoLucroReal } from "./components/ApuracaoLucroReal";
import { CalculoReducao } from "./components/CalculoReducao";
import { ModalAlert } from "./components/ModalAlert";
import { Header } from "./components/Header/index";
import { GeneralAdvises } from "./components/FeedBack/GeneralAdvises";
import { Footer } from "./components/Footer/index";
import { TextGenerator } from "./components/TextGenerator/index";

export const App = () => {
  const [precoLiquido, setPrecoLiquido] = useState(0);
  const [icmsVenda, setIcmsVenda] = useState(0);
  const [pisVenda, setPisVenda] = useState(0);
  const [cofinsVenda, setCofinsVenda] = useState(0);
  const [custoCompra, setCustoCompra] = useState(0);
  const [despesasFixas, setDespesasFixas] = useState(0);
  const [irpj, setIrpj] = useState(0);
  const [csll, setCsll] = useState(0);

  return (
    <>
      <ModalAlert />
      <Header />
      <Box sx={{ minHeight: "calc(100vh - 64px)", marginBottom: "64px" }}>
        <Container maxWidth="lg">
          <Box>
            <GeneralAdvises />
            <TextGenerator />
            <Container>
              <Produto
                precoLiquido={precoLiquido}
                setPrecoLiquido={setPrecoLiquido}
                setCustoCompra={setCustoCompra}
              />
              <Compra precoCompra={precoLiquido} />
              <Venda
                precoLiquido={precoLiquido}
                setIcmsVenda={setIcmsVenda}
                setPisVenda={setPisVenda}
                setCofinsVenda={setCofinsVenda}
                setDespesasFixas={setDespesasFixas}
                setIrpj={setIrpj}
                setCsll={setCsll}
              />
              <IndiceDivisor
                percentualIcms={icmsVenda}
                percentualReducao={pisVenda}
                percentualSimples={cofinsVenda}
                percentualPis={despesasFixas}
                percentualCofins={irpj}
              />
              <ApuracaoLucroReal
                precoLiquido={precoLiquido}
                icmsVenda={icmsVenda}
                pisVenda={pisVenda}
                cofinsVenda={cofinsVenda}
                custoCompra={custoCompra}
                despesasFixas={despesasFixas}
                irpj={irpj}
                csll={csll}
              />
              <CalculoReducao />
            </Container>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
