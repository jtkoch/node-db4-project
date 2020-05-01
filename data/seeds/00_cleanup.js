exports.seed = async function(knex) {
  await knex("recipe_instruction").truncate()
  await knex("recipe_ingredient").truncate()
  await knex("instructions").truncate()
  await knex("ingredients").truncate()
  await knex("recipes").truncate()
}