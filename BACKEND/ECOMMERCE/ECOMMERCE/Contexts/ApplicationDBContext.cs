using ECOMMERCE.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace ECOMMERCE.Contexts
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options) { }

        public DbSet<Carrito> Carrito { get; set; }
        public DbSet<Producto> Producto { get; set; }
        public DbSet<Categoria> Categoria { get; set; }
        public DbSet<SubCategoria> SubCategoria { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /*
            modelBuilder.Entity<Carrito>()
                .HasMany(e => e.Productos)
                .WithOne()
                .IsRequired();

            modelBuilder.Entity<Categoria>()
                .HasMany(e => e.SubCategorias)
                .WithOne(e => e.Categoria)
                .HasForeignKey(e => e.CategoriaId)
                .IsRequired();
            */
        }

    }
}
