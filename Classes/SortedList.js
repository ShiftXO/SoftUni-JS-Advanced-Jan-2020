class List {
    constructor() {
        this.data = [];
        this.size = 0;
    }

    add(n) {
        this.data.push(n);
        this.size++;
        this.data.sort((a, b) => a - b);
    }

    remove(n) {
        if (this.data.length > n && n >= 0) {
            this.data.splice(n, 1);
            this.data.sort((a, b) => a - b);
            this.size--;
        }
    }

    get(index) {
        if (this.data.length > index && index >= 0) {
            return this.data[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(5);
list.add(5);
list.add(5);
list.add(3);
list.remove(0);
console.log(list.get(0));//5
console.log(list.size);//1
