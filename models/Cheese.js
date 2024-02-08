const mongoose = require("./connection")

const { Schema, model } = mongoose

const CheeseSchema = new Schema(
    {
        name: String,
        countryOfOrigin: String,
        image: String
    }
)

const Cheese = model("Cheese", CheeseSchema)

module.exports = Cheese