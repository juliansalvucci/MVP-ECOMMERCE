export function Producto(Producto) {
  return (
    <div className="text-center p-5">
      <img src={Producto.image} alt={`Artículo: ${Producto.nombreProducto}`} className="img-fluid rounded-pill" />
      <p>{`Precio: $ ${Producto.precio}`}</p>
    </div>
  );
}
export default Producto;
