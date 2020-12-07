"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const objectFormatter_1 = require("../utlity/objectFormatter");
class Customer {
    constructor(customerId, customerName, address, email, phoneNumber, customerType, creditLimit, activeStatus, remarks) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.customerType = customerType;
        this.creditLimit = creditLimit;
        this.activeStatus = activeStatus;
        this.remarks = remarks;
    }
    // tslint:disable-next-line:typedef
    toString() {
        // return ObjectFormatter.format(this);
        return objectFormatter_1.ObjectFormatter.format(this);
    }
}
exports.Customer = Customer;
