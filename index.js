require("dotenv").config()
const express = require("express");
//const home = require("./views/");
const app = express();

app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(express.static("public"))

app.use("/places", require("./controllers/places"))

app.get("/", (req, res) => {
    res.render("home")
})

app.get('*', (req, res) => {
    
    res.render("error404")
    //res.status(404).send("<h1>404 page</h1>")
})

app.listen(process.env.PORT)