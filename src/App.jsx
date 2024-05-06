import { Button } from "@mui/material";

export const App = () => {
  return (
    <>
      <header>
        <div className="logo">Logo da Player</div>
        <h1>Calculando Preço - Lucro Real</h1>
      </header>
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
      <footer>
        <p>Player Contabilidade © 2024 - Todos direitos reservados</p>
      </footer>
    </>
  );
};
