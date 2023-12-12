namespace ECOMMERCE.Models
{
    public class SubCategoria
    {
        public int Id { get; set; }
        public string NombreSubCategoria { get; set; } 
        public int CategoriaId { get; set; }
        public Categoria Categoria { get; set; } 
    }
}
