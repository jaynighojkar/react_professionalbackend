"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../common");
const customer_service_1 = require("./customer-service");
class MainClass {
    static main() {
        try {
            const service = new customer_service_1.CustomerService();
            const promise = service.searchCustomers("Mean");
            promise
                .then(records => {
                if (records !== null) {
                    for (const record of records) {
                        common_1.LogManager.info(record.customerId + ", " +
                            record.customerName);
                    }
                }
            })
                .finally(() => common_1.LogManager.info("Service Invokded Successfully!"));
        }
        catch (error) {
            common_1.LogManager.error(error);
        }
    }
}
