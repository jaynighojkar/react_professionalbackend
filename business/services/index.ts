
import { LogManager } from "../../common";
import { CustomerService } from "./customer-service";


class MainClass {
    static main(): void {
        try {
            const service = new CustomerService();
            const promise = service.searchCustomers("Mean");

            promise
                .then(records => {
                    if (records !== null) {
                        for (const record of records) {
                            LogManager.info(record.customerId + ", " +
                                record.customerName);
                        }
                    }
                })
                .finally(() => LogManager.info("Service Invokded Successfully!"));
        } catch (error) {
            LogManager.error(error);
        }
    }
}
