import { useState } from "react";

export function Producto(Producto) {
  const [productosCarrito, setProductosCarrito] = useState([]);

  let productos = []

  const agregarACarrito = (producto) => {
    productos.push(producto);
    console.log(productos);
    //setProductosCarrito(prevProducto => [...prevProducto, producto]);
    //console.log(productosCarrito)
  };



  return (
    <div className="text-center p-5">
      <img
        src="./assets/sin-imagen.png"
        alt=""
        className="img-fluid rounded-pill"
      />
      <p>{`Artículo: ${Producto.nombreProducto}`}</p>
      <p>{`Precio: $ ${Producto.precio}`}</p>
      <button onClick={() => agregarACarrito(Producto)}>SELECCIONAR</button>
    </div>
  );
}
export default Producto;
