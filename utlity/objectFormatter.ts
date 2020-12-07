// tslint:disable-next-line:typedef
const INVALID_ARGUMENTS = "Invalid Argument(s) Specified!";
// tslint:disable-next-line:typedef
const DELIMITER = ", ";
// tslint:disable-next-line:typedef
const START_POS = 0;
// tslint:disable-next-line:typedef
const NO_OF_TRAIL_CHARS = 2;

class ObjectFormatter {
    public static format(obj: any): string {
        if (!obj) {
            throw new Error(INVALID_ARGUMENTS);
        }

        // tslint:disable-next-line:typedef
        let formattedMessage = "";

        // tslint:disable-next-line:forin
        for (let propertyIndex in obj) {
            // tslint:disable-next-line:typedef
            let property = obj[propertyIndex];

            if (property !== null && typeof property !== "function") {
                formattedMessage += `${property}${DELIMITER}`;
            }
        }

        formattedMessage = formattedMessage.substr(START_POS,
            formattedMessage.length - NO_OF_TRAIL_CHARS);

        return formattedMessage;
    }
}

export {
    ObjectFormatter
};
