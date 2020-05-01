const db = require("../data/db-config")

function getRecipes() {
  return db("recipes")
}

function getRecipesById(id) {
  return db("recipes").where({id})
}

function getShoppingList(id) {
  return db("recipe_ingredient as ri")
    .join("ingredients as i", "i.id", "ri_id")
    .select("i.ingredient_name")
    .where({"ri" :id})
}

function getInstructions(id) {
  return db("recipe_instruction as ri") 
    .join("instructions as i", "i.id", "ri.instruction_id")
    .select("i.instruction", "i.step")
    .where({"ri.recipe_id" :id})
    .orderBy("i.step")
}

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions,
}