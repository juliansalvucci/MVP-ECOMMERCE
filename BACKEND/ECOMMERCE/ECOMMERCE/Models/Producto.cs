using System.ComponentModel.DataAnnotations.Schema;

namespace ECOMMERCE.Models
{
    public class Producto
    {
        public int Id { get; set; }
        public string NombreProducto { get; set; }
        public decimal Precio { get; set; }
        public byte[] Imagen { get; set; }

        [ForeignKey("Categoria")]
        public int IdCategoria { get; set; }
    }
}
