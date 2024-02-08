require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const CheeseRouter = require("./controllers/cheese")

const app = express()

//middleware

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// use the Router middleware

app.use("/cheese", CheeseRouter)

//tester route

app.get("/", (req, res) => {
    res.send("hey now")
})




const PORT = process.env.PORT
app.listen(PORT, () => console.log(`we're listening on ${PORT}`))