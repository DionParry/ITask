using BookStore.Services.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BookStore.Dtos
{
    public class BookDto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }

        public decimal? Price { get; set; }

        public string Category { get; set; }

        public string Author { get; set; }

        public BookDto From(Book book)
        {
            return new BookDto()
            {
                Id = book?.Id,
                Name = book?.BookName,
                Price = book?.Price,
                Category = book?.Category,
                Author = book?.Author
            };
        }
    }
}