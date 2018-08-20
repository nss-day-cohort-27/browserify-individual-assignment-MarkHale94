const listPlacesComponent = (place) => {
    return `
        <div class="place--${place.id}">
            <header class="event__header--${place.id}">
                <h2 id="event__header--${place.id}">${place.placeName}</h2>
            </header>
            <article class="event__content--${place.id}">
                ${place.placeLocation}
            </article>
            <button class="place__edit" id="edit--${place.id}">Edit</button>
            <button class="place__delete" id="delete--${place.id}">Delete</button>
        </div>
    `
}

module.exports = listPlacesComponent