function solve(params) {
    let arr = [];
    let biggest = params[0];

    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (element >= biggest) {
            arr.push(element);
            biggest = element;
        }
    }

    console.log(arr.join('\n'));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
solve([1,
    2,
    3,
    4]
);
solve([20,
    3,
    2,
    15,
    6,
    1]
);