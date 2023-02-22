const { knex } = require("./db");

module.exports = {
  create,
  getAll,
};

async function getAll() {
  return (products = knex.select().from("Products"));
  /* try {
    const products = await knex.select().from("Products");
    console.log(products);
    return products;
  } catch (error) {
    console.error(error);
  } */
}

async function create(data) {
  return knex("Products").insert(data);
}
