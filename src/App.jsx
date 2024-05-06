import { Button } from "@mui/material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <form>
          <div>
            <p>
              <strong>Aviso:</strong> Essa calculadora pode apresentar pequenas
              divergências nos resultados. para maior precisão,{" "}
              <a href="#">consulte um dos nossos profissionais</a>
            </p>
          </div>
          <div>
            <h2>Produto</h2>
            <label>Preço de Compra</label>
            <input type="number" />
          </div>
          <Button variant="contained">Contained</Button>
        </form>
      </main>
      <Footer />
    </>
  );
};
