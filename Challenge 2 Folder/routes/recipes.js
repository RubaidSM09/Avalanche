const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const recipesPath = path.join(__dirname, '../data/recipes.json');

const readRecipes = () => JSON.parse(fs.readFileSync(recipesPath));
const writeRecipes = (data) => fs.writeFileSync(recipesPath, JSON.stringify(data, null, 2));

router.post('/', (req, res) => {
  const recipes = readRecipes();
  recipes.push(req.body);
  writeRecipes(recipes);
  res.status(201).send(req.body);
});

router.get('/', (req, res) => {
  const { availableIngredients } = req.query;
  const recipes = readRecipes();
  const matchingRecipes = recipes.filter((recipe) =>
    recipe.ingredients.some((ingredient) =>
      availableIngredients.includes(ingredient)
    )
  );
  res.send(matchingRecipes);
});

module.exports = router;
