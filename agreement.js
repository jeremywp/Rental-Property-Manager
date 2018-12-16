"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Agreement = /** @class */ (function () {
    function Agreement() {
        this._allAgreements = [];
    }
    Agreement.prototype.add = function (newDoc) {
        this._allAgreements.push(newDoc);
    };
    Agreement.prototype.find = function (undersigned) {
        return this._allAgreements.find(function (contract) { return contract.undersigned == undersigned; });
    };
    return Agreement;
}());
exports.Agreement = Agreement;
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
