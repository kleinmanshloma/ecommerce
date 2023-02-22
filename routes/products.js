const Router = require("express").Router();
const Controller = require("../controllers/products");
/* const CategoriesController = require("../controllers/categories"); */

Router.get("/products", async (req, res, next) => {
  let products = await Controller.getAll();
  console.log(products);
  res.render("product-form", { products });
});

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
