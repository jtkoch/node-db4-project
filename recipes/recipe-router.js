const express = require("express")

const recipes = require("./recipe-model")
const router = express.Router()

router.get("/", (req, res) => {
  recipes.getRecipes()
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get the recipes"
      })
    })
})

router.get("/:id", (req, res) => {
  recipes.getRecipesById(req.params.id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe)
      } else {
        res.status(404).json({
          message: "Could not find the recipe with this given id"
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get item"
      })
    })
})

router.get("/:id/ingredients", (req, res) => {
  recipes.getShoppingList(req.params.id)
    .then(ingredients => {
      if (ingredients.length) {
        res.json(ingredients)
      } else {
        res.status(404).json({
          message: "Count not find ingredients for given recipe"
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem with the data"
      })
    })
})

router.get("/:id/instructions", (req, res) => {
  recipes.getInstructions(req.params.id)
    .then(instructions => {
      res.json(instructions)
    })
    .catch(err => {
      res.status(500).json({ 
        message: "There was a problem with the data"
      })
    })
})

router.get("/ingredients/:id/recipes", (req, res) => {
  recipes.findRecipeIngredient(req.params.id)
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem with the data"
      })
    })
})

module.exports = router