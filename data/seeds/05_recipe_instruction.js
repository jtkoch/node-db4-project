exports.seed = async function(knex) {
  await knex("recipe_instruction").insert([
    { recipe_id: 1, instruction_id: 1 },
    { recipe_id: 1, instruction_id: 2 },
    { recipe_id: 2, instruction_id: 3 },
    { recipe_id: 2, instruction_id: 4 },
    { recipe_id: 2, instruction_id: 5 },
    { recipe_id: 2, instruction_id: 6 },
    { recipe_id: 3, instruction_id: 7 },
    { recipe_id: 3, instruction_id: 8 },
    { recipe_id: 3, instruction_id: 9 },
    { recipe_id: 3, instruction_id: 10 },
    { recipe_id: 3, instruction_id: 11 },
  ])
}