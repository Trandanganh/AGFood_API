const express = require('express');
const app = express();
const port = 3000; // hoặc một cổng khác nếu bạn muốn

// Định nghĩa các route API
app.get('/api/orders', (req, res) => {
    // Xử lý logic để lấy thông tin đơn hàng từ cơ sở dữ liệu
    // Sau đó trả về kết quả dưới dạng JSON
    res.json({ message: 'Danh sách đơn hàng' });
});

// Khởi chạy server
app.listen(port,() => {
                     console.log(`Server is listening on port ${port}`);
                   });