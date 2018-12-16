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
var Person = /** @class */ (function () {
    function Person(name, email, phoneNumber, dateOfBirth) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
    }
    return Person;
}());
exports.Person = Person;
var PropertyManager = /** @class */ (function (_super) {
    __extends(PropertyManager, _super);
    function PropertyManager(name, email, phoneNumber, dateOfBirth, propertyQuantities) {
        var _this = _super.call(this, name, email, phoneNumber, dateOfBirth) || this;
        _this.numberOfPropertiesManaged = propertyQuantities;
        return _this;
    }
    return PropertyManager;
}(Person));
exports.PropertyManager = PropertyManager;
var Owner = /** @class */ (function (_super) {
    __extends(Owner, _super);
    function Owner(name, email, phoneNumber, dateOfBirth, propertyQuantities) {
        var _this = _super.call(this, name, email, phoneNumber, dateOfBirth) || this;
        _this.numberOfPropertiesOwned = propertyQuantities;
        return _this;
    }
    return Owner;
}(Person));
exports.Owner = Owner;
var Renter = /** @class */ (function (_super) {
    __extends(Renter, _super);
    function Renter(name, email, phoneNumber, dateOfBirth, propertyQuantities) {
        var _this = _super.call(this, name, email, phoneNumber, dateOfBirth) || this;
        _this.numberOfPropertiesRented = propertyQuantities;
        return _this;
    }
    return Renter;
}(Person));
exports.Renter = Renter;
