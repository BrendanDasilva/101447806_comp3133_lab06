"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
// exercise 4 - modules
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    Customer.prototype.getAge = function () {
        console.log("Age: ".concat(this.age));
    };
    return Customer;
}());
exports.Customer = Customer;
