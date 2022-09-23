const React = require("react")
const Def = require("./default")

function error404 () {
    return(
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>OOPS, sorry, we can't find this page!</p>
            <img src="/images/404er.jpg" alt="oh no bad page" />
        </main>
    </Def>
    )
}

module.exports = error404