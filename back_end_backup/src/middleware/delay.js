const delay = (req, res, next) => {
  if (req.method === "GET") {
    next(); // Bỏ qua delay cho các phương thức GET
  } else {
    setTimeout(() => {
      next();
    }, 3000); // Áp dụng delay cho các phương thức khác
  }
};

export default delay;
