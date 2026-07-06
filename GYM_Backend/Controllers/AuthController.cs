using GYM_Backend.Data;
using GYM_Backend.Models;
using GYM_Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtService _jwtService;

        public AuthController(AppDbContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var email = model.Email;
            var password = model.Password;
            var user = await _context.Users
                .FirstOrDefaultAsync(x =>
                    x.Email == email &&
                    x.Password == password);

            if (user == null)
                return Unauthorized("Invalid Credentials");

            var token = _jwtService.GenerateToken(user);

            return Ok(new
            {
                Token = token,
                Role = user.Role,
                Name = user.Name
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(Register model)
        {
            var email = model.Email;
            var existingUser = await _context.Users
                .FirstOrDefaultAsync(x => x.Email == email);

            if (existingUser != null)
            {
                return BadRequest("Email already exists");
            }

            var user = new User
            {
                Name = model.Name,
                Email = model.Email,
                Password = model.Password,
                Role = model.Role
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "User Registered Successfully",
                role = user.Role
            });
        }
    }
}