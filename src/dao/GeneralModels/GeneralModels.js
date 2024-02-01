import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Esquema para el carrito
const cartSchema = new mongoose.Schema({
    products: {
        type: [{
            _id: false,
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products'
            },
            quantity: Number
        }],
        default: []
    }
});

mongoose.set('strictQuery', false);
const cartModel = mongoose.model('carts', cartSchema);

// Esquema para los mensajes
const messageSchema = new mongoose.Schema({
    user: { type: String, required: true },
    message: { type: String, required: true },
});

mongoose.set('strictQuery', false);
const messageModel = mongoose.model('messages', messageSchema);

// Esquema para los productos
const productSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    code: { type: String, unique: true, required: true},
    status: { type: Boolean, default: true},
    price: { type: Number, required: true},
    stock: { type: Number, required: true},
    category: { type: String, required: true},
    thumbnail: { type: [String], default: [] },
});

mongoose.set('strictQuery', false);
productSchema.plugin(mongoosePaginate);
const productModel = mongoose.model('products', productSchema);

export { cartModel, messageModel, productModel };