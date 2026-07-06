using GYM_Backend.Data;
using GYM_Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GYM_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderItemController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrderItemController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/OrderItem
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public async Task<IActionResult> GetAllOrderItems()
        {
            var orderItems = await _context.OrderItems.ToListAsync();
            return Ok(orderItems);
        }

        // GET: api/OrderItem/1
        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrderItemById(int id)
        {
            var orderItem = await _context.OrderItems.FindAsync(id);

            if (orderItem == null)
                return NotFound("Order Item Not Found");

            return Ok(orderItem);
        }

        // GET: api/OrderItem/order/1
        [Authorize]
        [HttpGet("order/{orderId}")]
        public async Task<IActionResult> GetOrderItemsByOrderId(int orderId)
        {
            var orderItems = await _context.OrderItems
                .Where(oi => oi.OrderId == orderId)
                .ToListAsync();

            return Ok(orderItems);
        }

        // POST: api/OrderItem
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> AddOrderItem(OrderItem orderItem)
        {
            await _context.OrderItems.AddAsync(orderItem);
            await _context.SaveChangesAsync();

            return Ok(orderItem);
        }

        // PUT: api/OrderItem/1
        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrderItem(int id, OrderItem orderItem)
        {
            if (id != orderItem.Id)
                return BadRequest("Order Item Id Mismatch");

            _context.OrderItems.Update(orderItem);
            await _context.SaveChangesAsync();

            return Ok(orderItem);
        }

        // DELETE: api/OrderItem/1
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderItem(int id)
        {
            var orderItem = await _context.OrderItems.FindAsync(id);

            if (orderItem == null)
                return NotFound("Order Item Not Found");

            _context.OrderItems.Remove(orderItem);
            await _context.SaveChangesAsync();

            return Ok("Order Item Deleted Successfully");
        }
    }
}