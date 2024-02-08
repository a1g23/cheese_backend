const express = require("express")
const Cheese = require("../models/Cheese")

const router = express.Router()

// routes


// get the array (Index)

router.get("/", async (req, res) => {
    try {
    const indexOfCheese = await Cheese.find({})
    res.json(indexOfCheese)
    } catch(err) {
        console.log("youve got an issue", err.message)
    }
})

// create

router.post("/", async (req, res) => {
    try {
        const newCheese = await Cheese.create(req.body)
        res.json(newCheese)
    } catch(err) {
        console.log("youve got an issue", err.message)
    }
})

// delete

router.delete("/:id", async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndDelete(req.params.id)) // interesting that we still have to send JSON here
    } catch(err) {
        console.log("youve got an issue", err.message)
    }
})

// show

router.get("/:id", async (req, res) => {
    try {
        const theCheese = await Cheese.findbyID(req.params.id)
        res.json(theCheese)
    } catch(err) {
        console.log("youve got an issue", err.message)
    }
})


// update

router.put("/:id", async (req, res) => {
    try {
        const theCheeseUpdate = await Cheese.findByIdAndUpdate(req.params.id, req.body)
        res.json(theCheeseUpdate)
    } catch(err) {
        console.log("youve got an issue", err.message)
    }
})



module.exports = router
