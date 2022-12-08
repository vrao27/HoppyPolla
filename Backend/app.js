const express = require("express");
require("dotenv").config();
const app = express();
const brewrecipeRoutes = require("./routes/brewrecipes");

//setting up basic middleware and ivoking next so the following steps will be carried out
//we can log the path and request
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/brewrecipes", brewrecipeRoutes);

//Port
app.listen(process.env.PORT, () => {
  console.log(`Server lsitening on port`, process.env.PORT);
});
