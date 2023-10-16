const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  img: {
    data: { type: Buffer, required: true }, // Binary image data
    contentType: { type: String, required: true }, // MIME type of the image
  },
  quantity: { type: Number, required: true },
  price:{ type: Number, required: true},
  discountedPrice: { type: Number},
  
});123

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
