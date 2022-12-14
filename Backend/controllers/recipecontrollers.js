const Recipe = require("../Models/recipemodel");

//get all recipes

//get single recipe

//create a recipe
const createRecipe = async (req, res) => {
  const { title, description } = req.body;


  //addind recipe doc to db
  try {
    const recipe1 = await Recipe.create({ title, description });
    res.status(200).json(recipe1);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a recipe

//update a recipe


//this is set to an object with different properties which are the fucntions
module.exports = { 
    createRecipe
}