using System.ComponentModel.DataAnnotations;

namespace ECOMMERCE.Models.Auth
{
    public class AuthenticateRequest
    {
        [Required]
        public string Correo { get; set; } = "";

        [Required]
        public string Password { get; set; } = "";
    }
}
