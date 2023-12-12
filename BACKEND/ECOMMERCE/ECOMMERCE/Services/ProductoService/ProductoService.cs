using ECOMMERCE.Models;
using ECOMMERCE.Repositories;
using System.Diagnostics.Contracts;

namespace ECOMMERCE.Services.ProductoService
{
    public class ProductoService : IProductoService
    {
        public List<Producto> GetAllProductos(int pages)
        {
            var data = new ProductoRepository();
            var productos = data.GetAllProductos(pages);
            return productos;
        }
    }
}
