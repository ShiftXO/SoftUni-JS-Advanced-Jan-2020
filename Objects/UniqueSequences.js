function solve(params) {
    let xd = (a,b)=> a.includes(b);
    let a = params[0].slice(1, params[0].length - 1).split(',').map(Number);;
    for (let i = 1; i < params.length; i++) {
        const arr = params[i].slice(1, params[i].length - 1).split(',').map(Number);
        for (let j = 0; j < arr.length; j++) {
            if (a.some(xd(a,arr[j]))) {
                break;
            }

        }
    }
}

solve([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);
solve([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]);