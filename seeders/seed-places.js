const db = require("../model")

db.Place.create([{
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/AnimeResteraunt.webp",
    founded: "1989"
}, {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Cofee, Bakery",
    pic: "/images/Resterauntanime.webp",
    founded: "2020"
}])
.then(() => {
    console.log("Success!")
    process.exit()
})
.catch(err => {
    console.log("Failure",err)
    process.exit()
})