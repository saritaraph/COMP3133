const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();
app.use(express.json());

app.use("/", restaurantRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server running on port", process.env.PORT || 3000);
    });
  })
  .catch((err) => console.log("MongoDB error:", err));

  mongoose.connection.once("open", () => {
  console.log("DB NAME:", mongoose.connection.name);
  console.log("COLLECTIONS:", Object.keys(mongoose.connection.collections));
});

