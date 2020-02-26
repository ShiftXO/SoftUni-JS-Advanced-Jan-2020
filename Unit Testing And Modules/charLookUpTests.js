let lookupChar = require('./charLookUp');
let assert = require('chai').assert;

describe('charLookUp() CHECK', () => {
    it('should return undefined from string', () => {
        let res = lookupChar(false, 12)
        assert.equal(res, undefined);
    });

    it('should return undefined from index', () => {
        let res = lookupChar('asd', 'asd')
        assert.equal(res, undefined);
    });

    it('should return undefined from index', () => {
        let res = lookupChar('asd', 3.12)
        assert.equal(res, undefined);
    });

    it('should return incorect from index equal to lenght of the string', () => {
        let res = lookupChar('asd', 4);
        assert.equal(res, 'Incorrect index');
    });

    it('should return incorect from negative index', () => {
        let res = lookupChar('asd', -1);
        assert.equal(res, 'Incorrect index');
    });

    it('should return the correct char', () => {
        let res = lookupChar('asd', 1);
        assert.equal(res, 's');
    });
});