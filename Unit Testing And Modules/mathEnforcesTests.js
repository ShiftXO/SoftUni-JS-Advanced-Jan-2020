let mathEnforcer = require('./MathEnforcer');
let assert = require('chai').assert;

describe('mathEnforcer() CHECK', () => {
    describe('Add function tests', () => {
        it('should return undefined cuz not a number', () => {
            let res = mathEnforcer.addFive('a');
            assert.equal(res, undefined);
        });

        it('should return the correct answer', () => {
            let res = mathEnforcer.addFive(5);
            assert.equal(res, 10);
        });

        it('should return the correct answer', () => {
            let res = mathEnforcer.addFive(-5);
            assert.equal(res, 0);
        });

        it('should return the correct answer', () => {
            let res = mathEnforcer.addFive(5.5);
            assert.equal(res, 10.5);
        });
    });

    describe('subtractTen function tests', () => {
        it('should return undefined cuz not a number', () => {
            let res = mathEnforcer.subtractTen('a');
            assert.equal(res, undefined);
        });

        it('should return the correct answer', () => {
            let res = mathEnforcer.subtractTen(15);
            assert.equal(res, 5);
        });
        
        it('should return the correct answer', () => {
            let res = mathEnforcer.subtractTen(-10);
            assert.equal(res, -20);
        });
        
        it('should return the correct answer', () => {
            let res = mathEnforcer.subtractTen(10.5);
            assert.equal(res, 0.5);
        });
    });

    describe('sum function tests', () => {
        it('should return undefined cuz 1st is not a number', () => {
            let res = mathEnforcer.sum('a', 11);
            assert.equal(res, undefined);
        });

        it('should return undefined cuz 2nd is not a number', () => {
            let res = mathEnforcer.sum(11, 'a');
            assert.equal(res, undefined);
        });

        it('should return the correct answer', () => {
            let res = mathEnforcer.sum(5, 5);
            assert.equal(res, 10);
        });
        
        it('should return the correct answer', () => {
            let res = mathEnforcer.sum(5, 5.5);
            assert.equal(res, 10.5);
        });

        it('should return the correct answer', () => {
            let res = mathEnforcer.sum(5.5, 5);
            assert.equal(res, 10.5);
        });
    });
});