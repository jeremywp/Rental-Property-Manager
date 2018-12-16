import {Agreement} from "./agreement";
import {Rental, Service} from "./interface";
import {DwellingType, House} from "./dwelling";
import {getAllHouses, logFirstAvailable} from "./script";


let whiteHouse = new House ("1600 Pennsylvania Ave.", 100, 200, 6000, false, DwellingType.duplex);

let villa = new House ("123 Cherry St.", 100, 120, 8000, true, DwellingType.twoStory);

let hut = new House ("1 Tropical Island Ln.", 1, 0, 49, true, DwellingType.rambler);

let van = new House ("Down By the River", 1, 1, 16, true, DwellingType.rambler);

export let allHouses = [whiteHouse, villa, hut, van];


getAllHouses();

logFirstAvailable();


let rentalAgreement = new Agreement<Rental>();

let serviceAgreement = new Agreement<Service>();