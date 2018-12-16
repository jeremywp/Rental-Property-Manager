export abstract class Person {
    name: string;
    email: string;
    phoneNumber: number;
    dateOfBirth: string;

    constructor (name, email, phoneNumber, dateOfBirth) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
    }

}

export class PropertyManager extends Person {

    numberOfPropertiesManaged: number;

    constructor (name, email, phoneNumber, dateOfBirth, propertyQuantities) {
        super(name, email, phoneNumber, dateOfBirth);
        this.numberOfPropertiesManaged = propertyQuantities;
    }
}

export class Owner extends Person {

    numberOfPropertiesOwned: number;

    constructor(name, email, phoneNumber, dateOfBirth, propertyQuantities) {
        super(name, email, phoneNumber, dateOfBirth);
        this.numberOfPropertiesOwned = propertyQuantities;
    }
}

export class Renter extends Person {

    numberOfPropertiesRented: number;

    constructor(name, email, phoneNumber, dateOfBirth, propertyQuantities) {
        super(name, email, phoneNumber, dateOfBirth);
        this.numberOfPropertiesRented = propertyQuantities;
    }
}