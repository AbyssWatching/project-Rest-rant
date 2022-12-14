const React = require("react")
const Def = require("../default")

function show (data) {
    return (
        <Def>
            <main>

                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                </div>
                <h1>{ data.place.name }</h1>

                <p>Currently unrated</p>

                <p>No comments yet</p>

                <h3>{data.place.showEstablished()}</h3>
                <h4>serving {data.place.cuisines}</h4>

                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>

                <form method = "Post" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn tbn-danger">Delete</button>
                </form>


            </main>
        </Def>
    )
}

module.exports = show