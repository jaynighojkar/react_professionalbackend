"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
// tslint:disable-next-line:typedef
const DEFAULT_MONGO_SERVER = "localhost";
// tslint:disable-next-line:typedef
const DEFAULT_MONGO_PORT = 27017;
// tslint:disable-next-line:typedef
const DEFAULT_MONGO_DB = "reacttrainingdb";
class Configuration {
    // tslint:disable-next-line:typedef
    static getConfiguration() {
        // tslint:disable-next-line:typedef
        let connectionString = process.env.MONGO_CONNECTION_STRING;
        if (!connectionString) {
            // tslint:disable-next-line:typedef
            const mongoServer = process.env.MONGO_SERVER || DEFAULT_MONGO_SERVER;
            // tslint:disable-next-line:typedef
            const mongoPort = process.env.MONGO_PORT || DEFAULT_MONGO_PORT;
            // tslint:disable-next-line:typedef
            const mongoDbName = process.env.MONGO_DB || DEFAULT_MONGO_DB;
            connectionString = `mongodb://${mongoServer}:${mongoPort}/${mongoDbName}`;
        }
        // tslint:disable-next-line:typedef
        const settings = {
            getConnectionString: () => connectionString
        };
        return settings;
    }
}
exports.Configuration = Configuration;
