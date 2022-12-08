const express = require("express");
const router = express.Router();

//Get aLL recipes
router.get("/", (req, res) => {
  res.json({ msg: "all recipes" });
});

//GEt a single recipe
router.get("/:id", (req, res) => {
  res.json({ msg: "single recipe" });
});

//Post a recipe
router.post("/", (req, res) => {
  res.json({ msg: "post a recipe" });
});

//Delete a recipe
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a recipe" });
});

//Update a recipe
router.patch("/:id", (req, res) => {
  res.json({ msg: "update a recipe" });
});

module.exports = router;
