function solve(params) {

    let step = params[params.length - 1];
    let arr = params.slice(0, params.length-1);

    let res = arr.filter(function (value, index) {
        return (index % step == 0);
    });

    console.log(res.join('\n'));
}

solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
);
solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']

);
solve(['1',
    '2',
    '3',
    '4',
    '5',
    '6']
);