const express = require('express');
const userRoutes = require('./routes/user_routes');
const shopRoutes = require('./routes/shop_routes');
const categoryRoutes = require('./routes/category_routes');
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/category', categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
