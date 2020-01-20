function solve(params) {
    let lastSum = 0;
    let res = false;
    for (let i = 0; i < params.length; i++) {
        let sum = params[i].map(Number).reduce((a, b) => a + b, 0);
        if (sum === lastSum && i !== 0) {
            res = true;
        }

        lastSum = sum;
    }

    console.log(res);
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);
solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);
solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);