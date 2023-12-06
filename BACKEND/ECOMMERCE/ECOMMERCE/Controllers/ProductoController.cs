using ECOMMERCE.Models;
using ECOMMERCE.Services.ProductoService;
using Microsoft.AspNetCore.Mvc;

namespace ECOMMERCE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly IProductoService _productoService;

        public ProductoController(IProductoService productoService)
        {
            _productoService = productoService;
        }

        [HttpGet("/api/GetAllProductos")]
        public ActionResult<List<Producto>> GetAllProductos()
        {
            try
            {
                var registros = _productoService.GetAllProductos();

                return Ok(registros);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error de servidor al obtener contratos:{ex.Message}");
            }
        }
    }
}
