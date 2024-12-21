const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const ingredientsPath = path.join(__dirname, '../data/ingredients.json');

const readIngredients = () => JSON.parse(fs.readFileSync(ingredientsPath));
const writeIngredients = (data) => fs.writeFileSync(ingredientsPath, JSON.stringify(data, null, 2));

router.post('/', (req, res) => {
  const ingredients = readIngredients();
  ingredients.push(req.body);
  writeIngredients(ingredients);
  res.status(201).send(req.body);
});

router.put('/:name', (req, res) => {
  const ingredients = readIngredients();
  const index = ingredients.findIndex((ing) => ing.name === req.params.name);
  if (index === -1) return res.status(404).send({ error: 'Ingredient not found' });
  ingredients[index] = { ...ingredients[index], ...req.body };
  writeIngredients(ingredients);
  res.send(ingredients[index]);
});

router.get('/', (req, res) => {
  res.send(readIngredients());
});

module.exports = router;
