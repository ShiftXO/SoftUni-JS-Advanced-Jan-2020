function solve(params) {
    let n = Number(params[0]);
    for (let i = 1; i < params.length; i++) {
        const element = params[i];

        switch (element) {
            case 'chop':
                n /= 2;
                break;
            case 'dice':
                n = Math.sqrt(n, 2);
                break;
            case 'spice':
                n += 1;
                break;
            case 'bake':
                n *= 3;
                break;
            case 'fillet':
                n = n * 0.80;
                break;
        }

        console.log(n);
    }
}

//solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);