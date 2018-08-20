renderNewPlaceForm =
            `
            <fieldset class="placesField">
                <label for="placeName">Name:</label>
                <input required type="text" id="placeName" placeholder="example:NSS">
            </fieldset>
            <fieldset class="placesField">
                <label for="placeLocation">Location:</label>
                <input required type="text" id="placeLocation" placeholder="example:Nashville">
            </fieldset>
            <button id="savePlaceEntry">Save Place Entry</button>
            <button id="cancelPlaceButton">Cancel</button>
            `;
module.exports = renderNewPlaceForm;