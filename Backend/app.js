const express = require("express");
require("dotenv").config();
const app = express();
const brewrecipeRoutes = require("./routes/brewrecipes");
const mongoose = require("mongoose");
// Set the strictQuery option to false
mongoose.set('strictQuery', false);

//setting up basic middleware and ivoking next so the following steps will be carried out
//we can log the path and request
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/brewrecipes", brewrecipeRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //Port listen to requests
    app.listen(process.env.PORT, () => {
      console.log(`Server lsitening on port`, process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
