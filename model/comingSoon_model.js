const mongoose = require("mongoose");
const comingSoonModel= new mongoose.model("comingsoons", mongoose.Schema({
_id: String,
image: String,
title: String,
github: String,
demo: String,
}))

module.exports = {
    comingSoonModel
}