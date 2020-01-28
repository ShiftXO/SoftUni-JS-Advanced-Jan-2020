function solve(params, type) {
    if (type == 'asc') {
        params = params.sort((a, b) => a - b);
    } else {
        params = params.sort((a, b) => b - a);
    }

    return params;
}

solve([14, 7, 17, 6, 8], 'asc');

solve([14, 7, 17, 6, 8], 'desc');