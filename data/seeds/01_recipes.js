exports.seed = async function(knex) {
  await knex("recipes").insert([
    { "recipe_name": "Mac and Cheese" },
    { "recipe_name": "Mushroom Stroganoff" },
    { "recipe_name": "Lemon Basil Pasta" }
  ])
}