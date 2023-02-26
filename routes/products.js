const Router = require("express").Router();
const Controller = require("../controllers/products");
const CategoriesController = require("../controllers/categories");

// HERE YOU HAVE 2 VIEWS 1. TO GET ALL categories 2. TO GET ALL products
Router.get("/products", async (req, res, next) => {
  let categories = await CategoriesController.getAll();
  let products = await Controller.getAll();
  console.log(products);
  res.render("product-form", { categories, products });
});

// Router.get("/categories", async (req, res, next) => {
//   let categories = await CategoriesController.getAll();
//   res.render("cat-form", { categories });
// });

Router.post("/create", async (req, res, next) => {
  try {
    let data = await Controller.create(req.body);
    res.send(data);
  } catch (e) {
    console.error(e);
    res.status(500).render("error", { error: e.toString() });
  }
});

module.exports = Router;
