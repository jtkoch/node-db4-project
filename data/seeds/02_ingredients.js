exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { "ingredient_name": "Macaroni" },
    { "ingredient_name": "Cheese" },
    { "ingredient_name": "Milk"},
    { "ingredient_name": "Butter"},
    { "ingredient_name": "Bread Crumbs"},
    { "ingredient_name": "Penne Noodles" },
    { "ingredient_name": "Mushrooms"},
    { "ingredient_name": "Olive Oil"},
    { "ingredient_name": "Parsley"},
    { "ingredient_name": "Garlic"},
    { "ingredient_name": "Yellow Onion"},
    { "ingredient_name": "Broccoli" },
    { "ingredient_name": "Fettuccine Noodles" },
    { "ingredient_name": "Basil"},
    { "ingredient_name": "Lemon"},
  ])
}