import {DwellingType, House} from "./dwelling";
import {allHouses} from "./Rental Property Manager";

export function getAllHouses(): Array<House> {
    console.log(allHouses);
    return allHouses;
}

export function logFirstAvailable() {
    let allAvailableHouses = allHouses.filter(House => House.available === true);
    console.log(allAvailableHouses);
}

export function getHouseAddressesByDwellingType (dwellingType: DwellingType): Array<string> {
    return allHouses
        .filter(House => House.dwellingType === dwellingType)
        .map((house: House) => house.address);
}