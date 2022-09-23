const router = require("express").Router()

router.post("/", (req, res) => {
    console.log(req.body)
    res.send("POST /places")
})

router.get("/new", (req,res) => {
    res.render("places/new" )
})

router.get("/", (req, res) => {

    let places = [{
        name: "H-Thai-ML",
        city: "Seattle",
        state: "wa",
        cuisines: "Thai, Pan-Asian",
        pic: "/images/animeResteraunt.webp",
        },
    {
        name: "Coding Cat Cafe",
        city: "Phoenix",
        state: "AZ",
        cuisines: "Coffee, Bakery",
        pic: "/images/Resterauntanime.webp",
    }]

    res.render("places/index", {places})
    //res.send("Get /places")
})











module.exports = router