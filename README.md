Route: /api/ingredients
Method: POST
Sample Payload:

'''json
[
{
  "name": "Sugar",
  "quantity": "2 cups"
}
]
'''
Sample Response:
'''json
[
{
  "name": "Sugar",
  "quantity": "2 cups"
}
]'''

Route: /api/ingredients/:name
Method: PUT
Sample Payload:
'''json
[
{
  "quantity": "3 cups"
}
]'''
Sample Response:
'''json
[
{
  "name": "Sugar",
  "quantity": "3 cups"
}
]'''

Route: /api/ingredients
Method: GET
Sample Response:
'''json
[
  {
    "name": "Sugar",
    "quantity": "3 cups"
  },
  {
    "name": "Flour",
    "quantity": "1 kg"
  }
]'''

Route: /api/recipes
Method: POST
Sample Payload:
'''json
[
{
  "title": "Pancakes",
  "ingredients": ["Flour", "Sugar", "Milk"],
  "instructions": "Mix ingredients and cook on a griddle.",
  "taste": "sweet",
  "cuisine": "American",
  "prepTime": 15
}
]'''
Sample Response:
'''json
[
{
  "title": "Pancakes",
  "ingredients": ["Flour", "Sugar", "Milk"],
  "instructions": "Mix ingredients and cook on a griddle.",
  "taste": "sweet",
  "cuisine": "American",
  "prepTime": 15
}
]'''

Route: /api/recipes
Method: GET
Parameters: availableIngredients (comma-separated list of ingredients)
Sample Response:
'''json
[
  {
    "title": "Pancakes",
    "ingredients": ["Flour", "Sugar", "Milk"],
    "instructions": "Mix ingredients and cook on a griddle.",
    "taste": "sweet",
    "cuisine": "American",
    "prepTime": 15
  },
  {
    "title": "Omelette",
    "ingredients": ["Eggs", "Milk", "Salt"],
    "instructions": "Whisk eggs and milk, cook in a pan.",
    "taste": "savory",
    "cuisine": "French",
    "prepTime": 10
  }
]'''


