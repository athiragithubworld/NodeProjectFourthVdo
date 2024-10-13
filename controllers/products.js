const Product = require('../models/products')

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddPoducts = (req, res, next) => {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

// exports.getProducts = (req, res, next) => {
//   const products = Product.fetchAll()
//   res.render("shop", {
//     prods: products,
//     pageTitle: "Shop",
//     path: "/",
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true,
//   });
// };

exports.getProducts = (req, res, next) => {
  // Fetch all products asynchronously and pass a callback
  Product.fetchAll((products) => {
    // This callback is executed once fetchAll finishes reading the file
    res.render("shop", {
      prods: products, // The array of products read from the file
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
