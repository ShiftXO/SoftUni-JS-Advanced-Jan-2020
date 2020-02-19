class Stringer {
    innerString;
    innerLength;

    constructor(srt, lenght) {
        this.innerString = srt;
        this.innerLength = lenght;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength = this.innerLength - length > 0 ? this.innerLength - length : 0;
    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        }

        return this.innerString.slice(0, this.innerLength) + (this.innerLength >= this.innerString.lenght ? '' : '...');
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
