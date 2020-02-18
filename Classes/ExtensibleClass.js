class Extensible {
    id;
    constructor() {
        Extensible.prototype.id = Extensible.prototype.id === undefined ? 0 : Number(Extensible.prototype.id) + 1;
        this.id = Extensible.prototype.id;
    }

    extend(template) {
        Object.entries(template).forEach(([key, value], i) => {
            if (typeof value === 'function') {
                Extensible.prototype[key] = value;
            } else {
                this[key] = value;
            }
        });
    }
}


let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
