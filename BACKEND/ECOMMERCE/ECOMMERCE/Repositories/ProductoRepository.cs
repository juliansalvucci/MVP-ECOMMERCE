using Dapper;
using ECOMMERCE.Models;
using Microsoft.Data.SqlClient;

namespace ECOMMERCE.Repositories
{
    public class ProductoRepository
    {
        public string _cnnStr = "Server=localhost\\SQLEXPRESS;Database=ECOMMERCEBD;Trusted_Connection=True;";
        public List<Producto> GetAllProductos()
        {
            using var cnn = new SqlConnection(_cnnStr);
            cnn.Open();
            var query = @$"SELECT * FROM Producto";
            var list = cnn.Query<Producto>(query).ToList();
            return list;
        }
    }
}
