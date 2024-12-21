const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const recipesPath = path.join(__dirname, '../data/recipes.json');
const readRecipes = () => JSON.parse(fs.readFileSync(recipesPath));

router.post('/', async (req, res) => {
  const { message, availableIngredients } = req.body;

  const recipes = readRecipes();

  const prompt = `
    You are a recipe assistant. Based on these ingredients: ${availableIngredients.join(', ')},
    and the user's preference: "${message}", suggest a suitable recipe from this list:
    ${JSON.stringify(recipes, null, 2)}
  `;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt,
        max_tokens: 150,
      },
      {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      }
    );

    res.send(response.data.choices[0].text.trim());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
