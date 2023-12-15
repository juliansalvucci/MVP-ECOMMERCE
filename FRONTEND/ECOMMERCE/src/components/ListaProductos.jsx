import { useState, useEffect } from "react";
import Producto from "./Producto";

function NavPage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page - 1)}
      >
        Sección {page + 1}
      </button>

      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)}
      >
        Sección {page + 2}
      </button>
    </header>
  );
}

export function ListaProductos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(1); //Manejdador de estado para paginación.

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      fetch(`https://localhost:7278/api/GetAllProductos?pages=${page}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        })
        .then((data) => {
          console.log(data);
          setProductos(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <div> Cargando...</div>
      ) : (
        <div className="row">
          {productos?.map((producto) => (
            <div className="col-md-4" key={producto.id}>
              <Producto
                key={producto.id}
                nombreProducto={producto.nombreProducto}
                precio={producto.precio}
              />
            </div>
          ))}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default ListaProductos;
