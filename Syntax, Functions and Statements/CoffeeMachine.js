function solve(params) {
    let map = {
        caffeine: 0.80,
        decaf: 0.90,
        tea: 0.80
    }

    let income = 0;
    let total = 0;
    let change = 0;
    let moneyNeeded = 0;

    for (let i = 0; i < params.length; i++) {
        let order = params[i].toString().split(", ");
        let inputMoney = Number(order[0]);
        let drink = order[1];

        if (drink === 'coffee') {
            drink = order[2];
            total += map[drink];
        } else {
            total += map[drink];
        }

        //MILK
        if (order.includes("milk")) {
            let res = total * 0.10;
            total += round(res,1);
        }
        //sugar
        if (order[order.length - 1] > 0) {
            total += 0.10;
        }
        if (inputMoney >= total) {
            change = Math.abs(total-inputMoney)
            
            console.log(`You ordered ${drink}. Price: $${total.toFixed(2)} Change: $${change.toFixed(2)}`);
            income += total;
        } else {
            moneyNeeded = Math.abs(inputMoney-total);
            console.log(`Not enough money for ${drink}. Need $${moneyNeeded.toFixed(2)} more.`);
            //income += total;
        }

        total = 0;
    }

    console.log(`Income Report: $${income.toFixed(2)}`);
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
}


solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);