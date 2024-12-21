require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const ingredientRoutes = require('./routes/ingredients');
const recipeRoutes = require('./routes/recipes');
const chatbotRoutes = require('./routes/chatbot');

const app = express();
app.use(bodyParser.json());

app.use('/api/ingredients', ingredientRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);
