import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Box } from "@mui/material";
import { Produto } from "./components/Produto/index";
import { Compra } from "./components/Compra/index";
import { Venda } from "./components/Venda/index";
import { Resultado } from "./components/Resultado/index";
import { ApuracaoLucroReal } from "./components/ApuracaoLucroReal/index";
import { CalculoReducao } from "./components/CalculoReducao/index";
import { Footer } from "./components/Footer/index";
import { ModalAlert } from "./components/ModalAlert/index";
import { Header } from "./components/Header/index";
import { GeneralAdvises } from "./components/GeneralAdvises/index";
import { TextGenerator } from "./components/TextGenerator/index";

export const App = () => {
  const [produto, setProduto] = useState({
    precoCompra: "",
  });

  const [compra, setCompra] = useState({
    ipi: "",
    frete: "",
    icms: "",
    reducao: "",
    pisCofins: "",
    retencao: "",
  });

  const [venda, setVenda] = useState({
    icms: "",
    reducao: "",
    simples: "",
    pis: "",
    cofins: "",
    irpj: "",
    cSocial: "",
    dFixa: "",
    margem: "",
    desconto: "",
  });

  const [calculoReducao, setCalculoReducao] = useState({
    valorProduto: "",
    baseCalculo: "",
    reducao: "",
  });

  const [resultado, setResultado] = useState({
    custoCompra: 0,
    custoVenda: 0,
    precoVendaBruta: 0,
    precoLiquido: 0,
    precoVendido: 0,
    icmsVenda: 0,
    pisCofinsVenda: 0,
    subtotal: 0,
    cmv: 0,
    lucroContabil: 0,
    despesas: 0,
    lucroBruto: 0,
    irpj: 0,
    csll: 0,
    lucroLiquidoReal: 0,
    indiceLucroLiquido: 0,
  });

  useEffect(() => {
    const calcularResultados = () => {
      const precoCompra = parseFloat(produto.precoCompra) || 0;
      const ipi = precoCompra * (parseFloat(compra.ipi) / 100) || 0;
      const frete = precoCompra * (parseFloat(compra.frete) / 100) || 0;
      const icmsCompra = precoCompra * (parseFloat(compra.icms) / 100) || 0;
      const reducaoCompra = icmsCompra - icmsCompra * (parseFloat(compra.reducao) / 100) || 0;
      const pisCofinsCompra = precoCompra * (parseFloat(compra.pisCofins) / 100) || 0;
      const retencao = precoCompra * (parseFloat(compra.retencao) / 100) || 0;

      const custoCompra =
        precoCompra +
        ipi +
        frete +
        icmsCompra +
        pisCofinsCompra +
        retencao -
        reducaoCompra;

      const precoVendaBruta = custoCompra / (1 - parseFloat(venda.margem) / 100) || 0;
      const precoLiquido = precoVendaBruta * (1 - parseFloat(venda.desconto) / 100) || 0;
      const icmsVenda = precoVendaBruta * (parseFloat(venda.icms) / 100) || 0;
      const reducaoVenda = precoVendaBruta * (parseFloat(venda.reducao) / 100) || 0;
      const simplesVenda = precoLiquido * (parseFloat(venda.simples) / 100) || 0;
      const pisVenda = precoLiquido * (parseFloat(venda.pis) / 100) || 0;
      const cofinsVenda = precoLiquido * (parseFloat(venda.cofins) / 100) || 0;
      const despesasFixas = precoLiquido * (parseFloat(venda.dFixa) / 100) || 0;

      const margem = precoLiquido * (parseFloat(venda.margem) / 100) || 0;
      const desconto = precoLiquido * (parseFloat(venda.desconto) / 100) || 0;

      const precoVendido = precoVendaBruta * (1 - parseFloat(venda.desconto) / 100) || 0;
      const pisCofinsVenda = pisVenda + cofinsVenda || 0;
      const subtotal = precoVendido - icmsVenda - pisCofinsVenda - reducaoVenda - simplesVenda;
      const cmv = custoCompra;
      const lucroContabil = subtotal - cmv;
      const despesas = despesasFixas;
      const lucroBruto = lucroContabil - despesas;
      const irpj = lucroBruto > 0 ? lucroBruto * (parseFloat(venda.irpj) / 100) : 0;
      const csll = lucroBruto > 0 ? lucroBruto * (parseFloat(venda.cSocial) / 100) : 0;
      const lucroLiquidoReal = lucroBruto - irpj - csll;
      const indiceLucroLiquido = (lucroLiquidoReal / precoLiquido) * 100 || 0;

      setResultado({
        custoCompra,
        custoVenda:
        custoCompra + precoLiquido * (parseFloat(venda.desconto) / 100) || 0,
        precoVendaBruta,
        precoLiquido,
        precoVendido,
        icmsVenda,
        pisCofinsVenda,
        subtotal,
        cmv,
        lucroContabil,
        despesas,
        lucroBruto,
        irpj,
        csll,
        lucroLiquidoReal,
        indiceLucroLiquido,
        margem,
        desconto,
      });
    };

    calcularResultados();
  }, [produto, compra, venda]);

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
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper elevation={3} style={{ padding: "16px" }}>
                    <Produto produto={produto} setProduto={setProduto} />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} style={{ padding: "16px" }}>
                    <Compra
                      compra={compra}
                      setCompra={setCompra}
                      produto={produto}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} style={{ padding: "16px" }}>
                    <Venda
                      venda={venda}
                      setVenda={setVenda}
                      resultado={resultado}
                    />
                  </Paper>
                </Grid>
                
                <Grid item xs={12}>
                  <Paper elevation={3} style={{ padding: "16px" }}>
                    <Resultado resultado={resultado} />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={3} style={{ padding: "16px" }}>
                    <ApuracaoLucroReal resultado={resultado} />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={3} style={{ padding: "16px" }}>
                    <CalculoReducao
                      calculoReducao={calculoReducao}
                      setCalculoReducao={setCalculoReducao}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
