import express from 'express'
import db from './db.js'
import cors from 'cors'

import userRoute from './modules/user/user.route.js';
import authRoute from './modules/authentication/auth.route.js';
import productRoute from './modules/product/product.route.js';
import brandRoute from './modules/brand/brand.route.js';
import attributeRoute from './modules/attribute/attribute.route.js';
import cartRoute from './modules/cart/cart.route.js';
import wishlistRoute from './modules/wishlist/wishlist.route.js';
import shippingRoute from './modules/shipping/shipping.route.js';
import storeRoute from './modules/store/store.route.js';
import orderRoute from './modules/order/order.route.js';


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);
app.use('/brand', brandRoute);
app.use('/attribute', attributeRoute);
app.use('/cart', cartRoute);
app.use('/wishlist', wishlistRoute);
app.use('/shipping', shippingRoute);
app.use('/store', storeRoute);
app.use('/order', orderRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});


