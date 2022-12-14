const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getRecipes,
  getSingleRecipe,
} = require("../controllers/recipecontrollers");


//Get aLL recipes
router.get("/", getRecipes);

//GEt a single recipe
router.get("/:id", getSingleRecipe);

//Post a recipe
router.post("/", createRecipe);

//Delete a recipe
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a recipe" });
});

//Update a recipe
router.patch("/:id", (req, res) => {
  res.json({ msg: "update a recipe" });
});

module.exports = router;
