import { Logger } from "tslog";

// tslint:disable-next-line:typedef
const LogManager = new Logger({
    displayDateTime: true,
    displayFilePath: "displayAll"
});

export {
    LogManager
};