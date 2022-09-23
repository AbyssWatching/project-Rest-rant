const router = require("express").Router()

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