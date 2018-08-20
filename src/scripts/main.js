const newPlaceComponent = require("newPlaceForm.js");
const listPlaces= require("listPlaces.js")
const dataManager = require("dataManager.js")
const placesListComponent = require("listPlacesForm.js")


//populate places div with the current info in the database
const listAllCurrentPlaces = ()=>{dataManager.getAllPlaces().then((places => listPlaces.populatePlaces(places)))};
listAllCurrentPlaces();

const placesGoHereDiv = document.querySelector("#placesGoHere");
placesGoHereDiv.addEventListener("click",()=>{
//creates a new div element to hold the event form
placesSectionDiv = document.querySelector("#placesSection");
let newPlaceEntryDiv = document.createElement("div");
newPlaceEntryDiv.innerHTML=newPlaceComponent;
placesSectionDiv.appendChild(newPlaceEntryDiv);

//adds event listener to the save place entry button
document.querySelector("#savePlaceEntry").addEventListener("click", () => {
    //function to create the object that will be pushed into the database
    const newPlaceObject = {
        placeName: document.querySelector("#placeName").value,
        placeLocation: document.querySelector("#placeLocation").value,
    }
    //saving the object into the database
    dataManager.savePlace(newPlaceObject)
    .then(()=>{
        // Clear the places list and repopulate it with the new data
       listPlaces.clearPlaces(),
       listAllCurrentPlaces();
    })
    
    //add event listener to the delete button
    document.querySelector("#placesSection").addEventListener("click", evt => {
        if (evt.target.classList.contains("place__delete")) {
            const id = parseInt(evt.target.id.split("--")[1])
            dataManager.deletePlace(id).then(()=>{
                listPlaces.clearPlaces(),
                listAllCurrentPlaces()})
        }
    });
})})
