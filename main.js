function showRandomPanda() {
  const panda = document.getElementById('panda');
  const bodyWidth = window.innerWidth;
  const bodyHeight = window.innerHeight;

  // Chọn ngẫu nhiên vị trí trái hoặc phải
  const randomSide = Math.random() > 0.5 ? 'left' : 'right';
  const randomTop = Math.random() * (bodyHeight - 150); // Đảm bảo ảnh không bị vượt quá chiều cao

  // Đặt ảnh tại vị trí ngẫu nhiên và hiển thị
  if (randomSide === 'left') {
      panda.style.left = `-150px`; // Bên trái màn hình
      panda.style.top = `${randomTop}px`;
      panda.style.transform = 'rotate(40deg)'; // Xoay 40 độ nếu từ trái
  } else {
      panda.style.left = `${bodyWidth}px`; // Bên phải màn hình
      panda.style.top = `${randomTop}px`;
      panda.style.transform = 'rotate(-40deg)'; // Xoay -40 độ nếu từ phải
  }

  // Hiển thị ảnh trong 5 giây
  panda.style.display = 'block';

  // Di chuyển ảnh từ ngoài màn hình vào
  setTimeout(() => {
      if (randomSide === 'left') {
          panda.style.transition = 'left 5s ease-out, transform 5s ease-out'; // Thêm hiệu ứng xoay vào cùng lúc
          panda.style.left = `-45px`; // Đưa ảnh vào trong màn hình
      } else {
          panda.style.transition = 'left 5s ease-out, transform 5s ease-out'; // Thêm hiệu ứng xoay vào cùng lúc
          panda.style.left = `${bodyWidth - 35}px`; // Đưa ảnh vào trong màn hình
      }
  }, 10);

  // Sau 5s ẩn ảnh đi
  setTimeout(() => {
      panda.style.display = 'none';
  }, 7000);
}

// Gọi hàm showRandomPanda mỗi 1 phút (60.000 ms)
setInterval(showRandomPanda, 10000);

// Đảm bảo hàm sẽ chạy ngay khi tải trang lần đầu tiên
showRandomPanda();
