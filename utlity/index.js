"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const common_1 = require("../common");
class MainClass {
    static main() {
        // tslint:disable-next-line:typedef
        const customer = new models_1.Customer(1, "Northwind", "Bangalore", "info@northwind.com", "080-498349834", "SILVER", 12000, true, "Simple Remarks");
        common_1.LogManager.info(customer.toString());
    }
}
MainClass.main();
