"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this._firstName, " ").concat(this._lastName));
    };
    Customer.prototype.GetAge = function () {
        console.log("Age: ".concat(this._age));
        return this._age;
    };
    return Customer;
}());
exports.Customer = Customer;
