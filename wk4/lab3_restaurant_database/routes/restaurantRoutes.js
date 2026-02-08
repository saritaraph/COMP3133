const express = require("express");
const Restaurant = require("../models/Restaurant");

const router = express.Router();

/**
 * http://localhost:3000/restaurants
 * http://localhost:3000/restaurants?sortBy=ASC
 * http://localhost:3000/restaurants?sortBy=DESC
 */
router.get("/restaurants", async (req, res) => {
  try {
    const sortBy = req.query.sortBy;

    // If no sortBy, return all columns
    if (!sortBy) {
      const restaurants = await Restaurant.find({});
      return res.status(200).json(restaurants);
    }

    // If sortBy exists, return selected columns + sort
    let sortOrder = 1;
    if (sortBy.toUpperCase() === "DESC") sortOrder = -1;

    const restaurants = await Restaurant.find(
      {},
      { cuisine: 1, name: 1, city: 1, restaurant_id: 1 } // _id included by default
    ).sort({ restaurant_id: sortOrder });

    return res.status(200).json(restaurants);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/**
 * 2) GET restaurants by cuisine (all columns)
 * http://localhost:3000/restaurants/cuisine/Japanese
 */
router.get("/restaurants/cuisine/:cuisine", async (req, res) => {
  try {
    const cuisine = req.params.cuisine;
    const restaurants = await Restaurant.find({ cuisine: cuisine });
    return res.status(200).json(restaurants);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/**
 * http://localhost:3000/restaurants/Delicatessen
 */
router.get("/restaurants/:cuisine", async (req, res) => {
  try {
    const cuisine = req.params.cuisine;

    const restaurants = await Restaurant.find(
      {
        cuisine: cuisine,
        city: { $ne: "Brooklyn" },
      },
      {
        _id: 0,
        cuisine: 1,
        name: 1,
        city: 1,
      }
    ).sort({ name: 1 });

    return res.status(200).json(restaurants);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
