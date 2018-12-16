export abstract class Dwelling {
    address: string;
    roomQty: number;
    bathQty: number;
    sqrFeet: number;
    available: boolean;


    constructor (address, roomQty, bathQty, sqrFeet, available) {
        this.address = address;
        this.roomQty = roomQty;
        this.bathQty = bathQty;
        this.sqrFeet = sqrFeet;
        this.available = available;
    };
}

export class House extends Dwelling {

    dwellingType: DwellingType;

    constructor(address, roomQty, bathQty, sqrFeet, available, dwellingType) {
        super(address, roomQty, bathQty, sqrFeet, available);
        this.dwellingType = dwellingType;
    }
}

export class Apartment extends Dwelling {

    dwellingType: DwellingType;

    constructor(address, roomQty, bathQty, sqrFeet, available, dwellingType) {
        super(address, roomQty, bathQty, sqrFeet, available);
        this.dwellingType = dwellingType;
    }
}

export enum DwellingType {
    rambler,
    twoStory,
    duplex
}