namespace GYM_Backend.Models
{
    public class CartItems
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
       
        public Product Product { get; set; }
    }
}
