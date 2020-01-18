function solve(a) {
    let arr = a.toString().split('');
    let result = arr.every((val, i, arr) => val === arr[0]);


    console.log(result);
    console.log(arr.reduce(function (a, b) {
        return +a + +b;
    }));
}

solve(2222);
