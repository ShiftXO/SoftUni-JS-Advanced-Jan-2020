class Rat {
    _united;

    constructor(name) {
        this.name = name;
        this._united = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat){
            this._united.push(otherRat);
        }
    }
    getRats() {
        return this._united;
    }
    toString() {
        if (this._united.length > 0) {
            let res = this.name;
            for (let i = 0; i < this._united.length; i++) {
                res += `\n##${this._united[i].name}`;
            }

            return res;
        } else {
            return this.name;
        }
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
