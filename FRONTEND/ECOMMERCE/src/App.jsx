import { ListaProductos } from "./components/ListaProductos";
import { Toolbar } from "./components/Toolbar/Toolbar";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">SYSTEM 32</h1>
      <Toolbar/>
      <br />
      <ListaProductos />
    </div>
  );
}

export default App;
