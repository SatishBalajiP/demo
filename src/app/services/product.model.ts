export class Product {
  public id: Number;
  public name: String;
  public price: Number;
  public img: String;
  public description: String;
  public rating: Number;
  public reviews: Number;
  public category: Number;

  constructor(id: Number, name: String, price: Number, img: String, description: String,rating:Number,reviews:Number, category: Number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.description = description;
    this.rating = rating;
    this.reviews = reviews;
    this.category = category;
  }
}