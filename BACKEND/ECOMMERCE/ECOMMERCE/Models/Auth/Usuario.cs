using System.ComponentModel.DataAnnotations;

namespace ECOMMERCE.Models.Auth
{
    public class Usuario
    {
        [Required]
        public string Apellido { get; set; } = "";

        [Required]
        public string Nombre { get; set; } = "";

        [Required]
        public string Correo { get; set; } = "";

        [Required]
        [MinLength(8, ErrorMessage = "La contraseña debe contener un mínimo de 8 caracteres")]
        public string Password { get; set; } = "";
    }
}
