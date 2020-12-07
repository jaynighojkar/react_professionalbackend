import { ICustomer } from "../common";
import { ObjectFormatter } from "../utlity/objectFormatter";




class Customer implements ICustomer {
    public constructor(public customerId: number, public customerName: string,
        public address: string, public email: string, public phoneNumber: string,
        public customerType: string, public creditLimit: number,
        public activeStatus: boolean, public remarks: string) {
    }

    // tslint:disable-next-line:typedef
    toString() {
        // return ObjectFormatter.format(this);
        return ObjectFormatter.format(this);
    }
}

export {
    Customer
};