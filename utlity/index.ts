import { Customer } from "../models";
import { LogManager } from "../common";


class MainClass {
    static main(): void {
        // tslint:disable-next-line:typedef
        const customer = new Customer(1, "Northwind", "Bangalore",
            "info@northwind.com", "080-498349834", "SILVER",
            12000, true, "Simple Remarks");

        LogManager.info(customer.toString());
    }
}

MainClass.main();