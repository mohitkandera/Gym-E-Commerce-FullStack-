using GYM_Backend.Data;
using GYM_Backend.Models;
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

        // GET: api/CartItems
        [Authorize(Roles = "User")]
        [HttpGet]
        public async Task<IActionResult> GetCartItems()
        {
            var userIdClaim = User.FindFirst("UserId");

            if (userIdClaim == null)
            {
                return Unauthorized("UserId not found in token");
            }

            int userId = int.Parse(userIdClaim.Value);

            var cartItems = await _context.CartItems
                .Where(c => c.UserId == userId)
                //.Include(c => c.Product)
                //.Select(c => new
                //{
                //    c.Id,
                //    c.UserId,
                //    c.ProductId,
                //    c.Quantity,
                //    c.Price,
                .Join(
                    _context.Products,
                    cart => cart.ProductId,
                    product => product.id,
                    (cart, product ) => new {
                        cart.Id,
                        cart.UserId,
                        cart.ProductId,
                        cart.Quantity,
                        cart.Price,

                    Product = new
                    {
                        product.id,
                        product.Name,
                        product.Description,
                        product.Price,
                        product.Weight,
                        product.Brand,
                        product.ImageUrl
                    }
                })
                .ToListAsync();

            return Ok(cartItems);
        }


        // POST: api/CartItems
        [Authorize(Roles = "User")]
        [HttpPost]
        public async Task<IActionResult> AddToCart(
            [FromBody] AddToCartDto dto)
        {
            var product = await _context.Products
                .FirstOrDefaultAsync(p => p.id == dto.ProductId);

            if (product == null)
            {
                return NotFound("Product not found");
            }

            var userIdClaim = User.FindFirst("UserId");

            if (userIdClaim == null)
            {
                return Unauthorized("UserId not found in token");
            }

            int userId = int.Parse(userIdClaim.Value);

            var cartItem = new CartItems
            {
                UserId = userId,
                ProductId = product.id,
                Quantity = dto.Quantity,
                Price = (int)product.Price
            };

            _context.CartItems.Add(cartItem);

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Product Added To Cart",

                cartItem.Id,
                cartItem.UserId,
                cartItem.ProductId,
                cartItem.Quantity,
                cartItem.Price,

                Product = new
                {
                    product.id,
                    product.Name,
                    product.Description,
                    product.Price,
                    product.Weight,
                    product.Brand,
                    product.ImageUrl
                }
            });
        }


        // DELETE: api/CartItems/1
        [Authorize(Roles = "User")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveFromCart(int id)
        {
            var item = await _context.CartItems
                .FirstOrDefaultAsync(c => c.Id == id);

            if (item == null)
            {
                return NotFound("Cart item not found");
            }

            _context.CartItems.Remove(item);

            await _context.SaveChangesAsync();

            return Ok("Item Removed From Cart");
        }
    }


    // DTO
    public class AddToCartDto
    {
        public int ProductId { get; set; }

        public int Quantity { get; set; }
    }
}