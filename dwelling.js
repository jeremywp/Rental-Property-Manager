"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dwelling = /** @class */ (function () {
    function Dwelling(address, roomQty, bathQty, sqrFeet, available) {
        this.address = address;
        this.roomQty = roomQty;
        this.bathQty = bathQty;
        this.sqrFeet = sqrFeet;
        this.available = available;
    }
    ;
    return Dwelling;
}());
exports.Dwelling = Dwelling;
var House = /** @class */ (function (_super) {
    __extends(House, _super);
    function House(address, roomQty, bathQty, sqrFeet, available, dwellingType) {
        var _this = _super.call(this, address, roomQty, bathQty, sqrFeet, available) || this;
        _this.dwellingType = dwellingType;
        return _this;
    }
    return House;
}(Dwelling));
exports.House = House;
var Apartment = /** @class */ (function (_super) {
    __extends(Apartment, _super);
    function Apartment(address, roomQty, bathQty, sqrFeet, available, dwellingType) {
        var _this = _super.call(this, address, roomQty, bathQty, sqrFeet, available) || this;
        _this.dwellingType = dwellingType;
        return _this;
    }
    return Apartment;
}(Dwelling));
exports.Apartment = Apartment;
var DwellingType;
(function (DwellingType) {
    DwellingType[DwellingType["rambler"] = 0] = "rambler";
    DwellingType[DwellingType["twoStory"] = 1] = "twoStory";
    DwellingType[DwellingType["duplex"] = 2] = "duplex";
})(DwellingType = exports.DwellingType || (exports.DwellingType = {}));
