using ECOMMERCE.Models;
using Microsoft.EntityFrameworkCore;

namespace ECOMMERCE.Contexts
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options) { }

        public DbSet<Producto> Producto { get; set; }
    }
}
