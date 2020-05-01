exports.seed = async function(knex) {
  await knex("instructions").insert([
    { "step":1, "instruction": "Boil water for the noodles and place the noodles into the water. Bring to a simmer and let it sit until tender and drain" },
    { "step":2, "instruction": "Once the noodles are tender add in the butter, milk, and cheese. Once mixed in add bread crumbs to top" },
    { "step":3, "instruction": "In a single pot add Garlic and Olive oil. Let this simmer until fragrant (about 3 minutes)" },
    { "step":4, "instruction": "Then add in Mushrooms, Onion, 1 cup of milk, 2 cups of broth, 8 ounces of noodles, salt and pepper" },
    { "step":5, "instruction": "Bring the pot to a boil and then let it sit at a simmer for about 20 minutes or until the noodles are soft" },
    { "step":6, "instruction": "Just before serving add parmesan cheese and mix well. Top with parsley and enjoy!" },
    { "step":7, "instruction": "Bring a pot of water to a boil and add in noodles and bring back to a simmer until tender and drain" },
    { "step":8, "instruction": "In a seperate skillet saute Broccoli or vegetables of your choosing" },
    { "step":9, "instruction": "Season them with salt and pepper to your liking, Then add in the basil" },
    { "step":10, "instruction": "Let this simmer for about 15 minutes and then add 1 tablespoon of lemon juice" },
    { "step":11, "instruction": "Season more if you'd like and enjoy!" },
  ])
}