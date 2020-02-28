let StringBuilder = require('./StringBuilder');
let assert = require('chai').assert;

describe('StringBuilder behavior', () => {
    let actualResult;

    beforeEach(() => {
        actualResult = null;
    });

    describe('contstructor tests', () => {
        it('should throw when creating sb with wrong params', () => {
            actualResult = () => new StringBuilder(1);
            assert.throw(actualResult, 'Argument must be string');
        });

        it('', () => {
            actualResult = new StringBuilder('123');
            assert.deepEqual(actualResult._stringArray, ['1', '2', '3']);
        });

        it('', () => {
            actualResult = new StringBuilder();
            assert.deepEqual(actualResult._stringArray, []);
        });
    });

    describe('append tests', () => {
        it('should throw ex when param type is incorrect', () => {
            actualResult = new StringBuilder();
            let res = () => actualResult.append(false);
            assert.throw(res, 'Argument must be string');
        });

        it('should append the given string', () => {
            actualResult = new StringBuilder('12');
            actualResult.append('34');
            assert.deepEqual(actualResult._stringArray, ['1', '2', '3', '4'])
        });

        it('test if added at the end', () => {
            actualResult = new StringBuilder('123');
            actualResult.append('4');
            assert.equal(actualResult._stringArray[3], '4');
        });
    });

    describe('prepend tests', () => {
        it('should throw ex when param type is incorrect', () => {
            actualResult = new StringBuilder();
            let res = () => actualResult.prepend(false);
            assert.throw(res, 'Argument must be string');
        });

        it('should work corectly', () => {
            actualResult = new StringBuilder('3');
            actualResult.prepend('1');
            assert.deepEqual(actualResult._stringArray, ['1', '3']);
        });
        
        it('test if can add if arr is empty', () => {
            actualResult = new StringBuilder();
            actualResult.prepend('1');
            assert.equal(actualResult._stringArray[0], '1');
        });
    });

    describe('insertAt tests', () => {
        it('should throw ex when param type is incorrect', () => {
            actualResult = new StringBuilder();
            let res = () => actualResult.insertAt(false);
            assert.throw(res, 'Argument must be string');
        });

        it('should insert corectly', () => {
            actualResult = new StringBuilder('13');
            actualResult.insertAt('2', 1);
            assert.deepEqual(actualResult._stringArray, ['1', '2', '3'])
        });

        it('Test if the string is inserted at index', () => {
            actualResult = new StringBuilder('16');
            actualResult.insertAt('2345', 1);
            assert.equal(actualResult._stringArray[1], '2');
        });
    });

    describe('remove tests', () => {
        it('should work corectly', () => {
            actualResult = new StringBuilder('1234');
            actualResult.remove(0, 2);
            assert.deepEqual(actualResult._stringArray, ['3', '4']);
        });

        it('invalid indexes', () => {
            actualResult = new StringBuilder('1234');
            actualResult.remove(-1, 4);
            assert.deepEqual(actualResult._stringArray, ['1', '2', '3']);
        });
    });

    describe('toString tests', () => {
        it('should work corectly', () => {
            actualResult = new StringBuilder('1234');
            assert.deepEqual(actualResult.toString(), '1234');
        });
    });

    describe('Type of StringBuilder', ()=> {
        it('should have the correct function properties',()=> {
            assert.isFunction(StringBuilder.prototype.append);
            assert.isFunction(StringBuilder.prototype.prepend);
            assert.isFunction(StringBuilder.prototype.insertAt);
            assert.isFunction(StringBuilder.prototype.remove);
            assert.isFunction(StringBuilder.prototype.toString);
        });
    });
});