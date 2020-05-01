
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.text("recipe_name").notNull()
  })

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id")
    table.text("ingredient_name").notNull()
  })

  await knex.schema.createTable("instructions", (table) => {
    table.increments("id")
    table.integer("step").notNull()
    table.string("instruction").notNull().unique()
  })

  await knex.schema.createTable("recipe_ingredient", (table) => {
    table.increments("id")
    table.integer("recipe_id")
      .notNull()
      .references("recipes.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table.integer("ingredient_id")
      .notNull()
      .references("ingredients.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE") 
  })

  await knex.schema.createTable("recipe_instruction", (table) => {
    table.increments("id")
    table.integer("recipe_id")
      .notNull()
      .references("recipes.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table.integer("instruction_id")
      .notNull()
      .references("instructions.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")  
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipe_instruction")
  await knex.schema.dropTableIfExists("recipe_ingredient")
  await knex.schema.dropTableIfExists("instructions")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
}
