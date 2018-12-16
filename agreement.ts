
import {LegalTerms} from "./interface";

export class Agreement<T extends LegalTerms> {

    private _allAgreements: Array<T> = [];

    add(newDoc: T) {
        this._allAgreements.push(newDoc);
    }

    find(undersigned: string) {
        return this._allAgreements.find(contract => contract.undersigned == undersigned);
    }
}

/*function logFirstAvailable() {
    let housesAvailable = 0;
    let firstHouseAvailable;cd ./
    for (let i=0; i < House.length; i++) {
        if (House[i].available == true) {
            housesAvailable++;
        }
    }
    for (let j=0; j < House.length; j++){
        if (House[j].available == true) {
            firstHouseAvailable = House[j];
            return firstHouseAvailable;
        }
    }

    console.log(firstHouseAvailable, housesAvailable, firstHouseAvailable.address);
}*/