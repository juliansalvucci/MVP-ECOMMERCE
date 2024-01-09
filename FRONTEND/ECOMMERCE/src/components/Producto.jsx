export function Producto(Producto) {
  return (
    <div className="text-center p-5">
      <img src="./assets/sin-imagen.png" alt="" className="img-fluid rounded-pill" />
      <p>{`Artículo: ${Producto.nombreProducto}`}</p>
      <p>{`Precio: $ ${Producto.precio}`}</p>
      <button onClick={()=> console.log(Producto)}>SELECCIONAR</button>
    </div>
  );
}
export default Producto;
