"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomGenerator = void 0;
// tslint:disable-next-line:typedef
const DEFAULT_MINIMUM = 1;
// tslint:disable-next-line:typedef
const DEFAULT_MAXIMUM = 100000000;
class RandomGenerator {
    // tslint:disable-next-line:typedef
    static generate(minimum = DEFAULT_MINIMUM, maximum = DEFAULT_MAXIMUM) {
        // tslint:disable-next-line:typedef
        const generatedNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
        return generatedNumber;
    }
}
exports.RandomGenerator = RandomGenerator;
