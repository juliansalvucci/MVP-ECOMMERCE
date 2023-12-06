using ECOMMERCE.Models;
using ECOMMERCE.Repositories;
using System.Diagnostics.Contracts;

namespace ECOMMERCE.Services.ProductoService
{
    public class ProductoService : IProductoService
    {
        public List<Producto> GetAllProductos()
        {
            var data = new ProductoRepository();
            var productos = data.GetAllProductos();
            return productos;
        }
    }
}
