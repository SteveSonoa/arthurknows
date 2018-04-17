const router = require("express").Router();

// Example:
// const bookRoutes = require("./books");

const searchRoutes = require("./search.js");


// Example:
// // Book routes
// router.use("/books", bookRoutes);

// Search routes
router.use("/search", searchRoutes)

module.exports = router;
