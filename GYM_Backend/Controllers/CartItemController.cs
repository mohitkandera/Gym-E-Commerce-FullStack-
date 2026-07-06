using GYM_Backend.Data;
using GYM_Backend.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GYM_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartItemsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CartItemsController(AppDbContext context)
        {
            _context = context;
        }
        [Authorize(Roles = "User")]
        [HttpGet]
        public async Task<IActionResult> GetCartItems()
        {
            return Ok(await _context.CartItems.ToListAsync());
        }
        [Authorize(Roles ="User")]
        [HttpPost]
        public async Task<IActionResult> AddToCart(CartItems cartItem)
        {
            await _context.CartItems.AddAsync(cartItem);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Product Added To Cart"
            });
        }
        [Authorize(Roles = "User")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveFromCart(int id)
        {
            var item = await _context.CartItems.FindAsync(id);

            if (item == null)
                return NotFound();

            _context.CartItems.Remove(item);
            await _context.SaveChangesAsync();

            return Ok("Item Removed From Cart");
        }
    }
}