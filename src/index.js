recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"]
}

const newRecipe = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"]
}