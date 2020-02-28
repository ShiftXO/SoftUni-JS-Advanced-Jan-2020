let PaymentPackage = require('./PaymentPackage');
let assert = require('chai').assert;

describe('PaymentPackage CHECK', () => {
    let actualResult;

    beforeEach(() => {
        actualResult = null;
    });

    describe('constructor tests', () => {
        it('valid params test', () => {
            actualResult = new PaymentPackage('xd', 1000);
            assert.equal(actualResult.name, 'xd');
            assert.equal(actualResult.value, 1000);
        });

        it('default values setters test', () => {
            actualResult = new PaymentPackage('xd', 1000);
            assert.equal(actualResult.VAT, 20);
            assert.equal(actualResult.active, true);
        });

        it('invalid name should throw', () => {
            actualResult = () => new PaymentPackage(true, 1000);
            assert.throw(actualResult, 'Name must be a non-empty string');
        });

        it('invalid name length should throw', () => {
            actualResult = () => new PaymentPackage('', 1000);
            assert.throw(actualResult, 'Name must be a non-empty string');
        });

        it('invalid value param should throw', () => {
            actualResult = () => new PaymentPackage('xd', true);
            assert.throw(actualResult, 'Value must be a non-negative number');
        });

        it('negative value param should throw', () => {
            actualResult = () => new PaymentPackage('xd', -1);
            assert.throw(actualResult, 'Value must be a non-negative number');
        });
    });

    describe('VAT setter and getter tests', () => {
        it('invalid value type should throw', () => {
            actualResult = new PaymentPackage('xd', 1000);
            assert.throw(() => (actualResult.VAT = true), 'VAT must be a non-negative number');
        });
        
        it('negative value should throw', () => {
            actualResult = new PaymentPackage('xd', 1000);
            assert.throw(() => (actualResult.VAT = -1), 'VAT must be a non-negative number');
        });
    });

    describe('active setter and getter tests', () => {
        it('invalid value type should throw', () => {
            actualResult = new PaymentPackage('xd', 1000);
            assert.throw(() => (actualResult.active = 1), 'Active status must be a boolean');
        });

        it('valid value set test', () => {
            actualResult = new PaymentPackage('xd', 1000);
            actualResult.active = false;
            assert.equal(actualResult.active, false);
        });
    });

    describe('toString test', () => {
        it('idk how to name the test (:', () => {
            actualResult = new PaymentPackage('xd', 1000);
            let res = actualResult.toString();
            let expected = ['Package: xd', '- Value (excl. VAT): 1000', '- Value (VAT 20%): 1200'].join('\n');
            assert.equal(res, expected);
        });

        it('idk how to name the test (:', () => {
            actualResult = new PaymentPackage('xd', 1000);
            actualResult.active = false;
            actualResult.VAT = 50;
            let res = actualResult.toString();
            let expected = ['Package: xd (inactive)', '- Value (excl. VAT): 1000', '- Value (VAT 50%): 1500'].join('\n');
            assert.equal(res, expected);
        });

        it('idk how to name the test (:', () => {
            actualResult = new PaymentPackage('xd', 0);
            actualResult.active = false;
            actualResult.VAT = 0;
            let res = actualResult.toString();
            let expected = ['Package: xd (inactive)', '- Value (excl. VAT): 0', '- Value (VAT 0%): 0'].join('\n');
            assert.equal(res, expected);
        });
    });
});