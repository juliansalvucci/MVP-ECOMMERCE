using Microsoft.Extensions.Hosting;

namespace ECOMMERCE.Models
{
    public class Categoria
    {
        public int Id { get; set; }
        public string NombreCategoria { get; set; } = "";
        public ICollection<SubCategoria> SubCategorias { get; } = new List<SubCategoria>();
    }
}
