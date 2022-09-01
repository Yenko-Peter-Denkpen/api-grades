const express = require("express");
const dotenv = require("dotenv");
const results=require("./results")

dotenv.config();
const app = express();

//rout
app.get("/", (req, res) => {
    res.send("<h1>Welcome to our portal</h1>")
})
// get all results

app.get("/results", (req, res) => {
result.json(results)
})
const PORT =process.env.PORT || 5000

app.listen(PORT, () =>
console.log(`server is running on ${PORT}`))
