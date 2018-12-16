"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rental_Property_Manager_1 = require("./Rental Property Manager");
function getAllHouses() {
    console.log(Rental_Property_Manager_1.allHouses);
    return Rental_Property_Manager_1.allHouses;
}
exports.getAllHouses = getAllHouses;
function logFirstAvailable() {
    var allAvailableHouses = Rental_Property_Manager_1.allHouses.filter(function (House) { return House.available === true; });
    console.log(allAvailableHouses);
}
exports.logFirstAvailable = logFirstAvailable;
function getHouseAddressesByDwellingType(dwellingType) {
    return Rental_Property_Manager_1.allHouses
        .filter(function (House) { return House.dwellingType === dwellingType; })
        .map(function (house) { return house.address; });
}
exports.getHouseAddressesByDwellingType = getHouseAddressesByDwellingType;
