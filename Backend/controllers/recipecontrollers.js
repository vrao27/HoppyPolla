const Recipe = require("../Models/recipemodel");
const mongoose = require("mongoose");

//all of the following functions are async

//get all recipes - we can use the FIND and SORT methods to filter out recipes
const getRecipes = async (req, res) => {
  const allRecipes = await Recipe.find({}).sort({ createdAt: -1 });

  res.status(200).json(allRecipes);
};

//get single recipe

const getSingleRecipe = async (req, res) => {
  const { id } = req.params;

  //this is done to check the id from mongoose and if this is not there then the error is displayed
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such brew" });
  }

  const recipe = await Recipe.findById(id);

  if (!recipe) {
    return res.status(404).json({ error: "Brew recipe does not exist" });
  }
  res.status(200).json(recipe);
};

//create a recipe
const createRecipe = async (req, res) => {
  const {
    title,
    description,
    brewingWater,
    mashGrains,
    mashSchedule,
    boil,
    fermentation,
  } = req.body;

  //adding recipe doc to db
  try {
    const recipe = await Recipe.create({
      title,
      description,
      brewingWater,
      mashGrains,
      mashSchedule,
      boil,
      fermentation,
    });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a recipe
const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such brew" });
  }
  //we use underscore id _id since id in mongo is defined like that
  const recipe = await Recipe.findOneAndDelete({ _id: id });

  if (!recipe) {
    return res.status(404).json({ error: "Brew recipe does not exist" });
  }

  res.status(200).json(recipe);
};

//update a recipe

const updateRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such brew" });
  }
  //we use the spread operator to update the elements in the recipe body eg. title, maschSchedule etc
  const recipe = await Recipe.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!recipe) {
    return res.status(404).json({ error: "Brew recipe does not exist" });
  }

  res.status(200).json(recipe);
};

//this is set to an object with different properties which are the fucntions
module.exports = {
  createRecipe,
  getRecipes,
  getSingleRecipe,
  deleteRecipe,
  updateRecipe
};
