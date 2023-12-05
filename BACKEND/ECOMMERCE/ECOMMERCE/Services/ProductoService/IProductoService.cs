using ECOMMERCE.Models;
using System.Diagnostics.Contracts;

namespace ECOMMERCE.Services.ProductoService
{
    public interface IProductoService
    {
        public List<Producto> GetAllContratos();
    }
}
