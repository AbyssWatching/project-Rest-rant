# Project REST-Rant

REST-Rant is an app where users can review restaurants.

As a person interested in resteraunts I need (feature) so I can (action)

color scheme(primary: black, secondary: cyan, third: purple)

|  Method  |       Path           | Purpose                                         |
|----------|----------------------|-------------------------------------------------|
|    Get   |           /           |Home Page                                       |
|    Get   |          /places      | Places index page                              |
|   Post   |          /places      | creates new place                              |
|    GET   |      /places/new      | Form page for creating a new place             |
|    Get   |      /places:id       | Detrails about a particular place              |
|   Put    |     /places:id        | Update a particulair place                     |
|     Get  |   /places/id/edit     | Form page for editing an existing place        |
|  delete  | /places/:id           | delete a particular place                      |
|    post  |/places/:id/rant/      | create a rant comment                          |
|   delete |/places:id/rant/:rantid| delete a rant comment                          |
|   Get    |        *              | 404 page                                       |
