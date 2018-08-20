const listPlacesForm = require("listPlacesForm.js")
 const placesList = {
    populatePlaces : (places) => {

    places.map(place => {
        document.getElementById("placesSection").innerHTML += listPlacesForm(place)
    })
    },

    clearPlaces: ()=>{document.getElementById("placesSection").innerHTML = ""
    }
}

 module.exports = placesList;