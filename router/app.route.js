const controller = require("../controller/app.controller");
const express = require("express");
const router =express.Router();


router.get("/portfolio", controller.portfolioApp);
router.get("/testimonial", controller.testimonialApp);

module.exports = router