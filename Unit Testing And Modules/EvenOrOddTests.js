let evenOrOdd = require('./EvenOrOdd');
let assert = require('chai').assert;

describe('evenOrOdd() CHECK', () => {
    it('should return undefined', () => {
        let result = isOddOrEven(false);
        assert.equal(result, undefined, 'result is not undefined');
    });

    it('should be even', () => {
        let result = isOddOrEven('as');
        assert.equal(result, "even", 'result is not even');
    });

    it('should be odd', () => {
        let result = isOddOrEven('asd');
        assert.equal(result, 'odd', 'result is not odd');
    });
});