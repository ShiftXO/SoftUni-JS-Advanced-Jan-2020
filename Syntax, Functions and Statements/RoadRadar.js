
function solve(params) {
    let map = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let speed = params[0];
    let area = params[1];

    if (speed > map[area]) {
        let a = speed - map[area];

        if (a <= 20) {
            console.log("speeding");
        } else if (a > 20 && a <= 40) {
            console.log("excessive speeding");
        } else {
            console.log("reckless driving");
        }
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);