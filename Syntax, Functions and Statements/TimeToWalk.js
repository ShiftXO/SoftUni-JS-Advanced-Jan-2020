function solve(steps, stepLength, speed) {
    let length = steps * stepLength;
    let rest = Math.floor(length / 500);
    let totalTime =length / speed / 1000 * 60;
    let totalTimeInSecs = Math.ceil((rest + totalTime) * 60);
    let result = new Date(null, null, null, null, null, totalTimeInSecs)
    console.log(result.toString().split(' ')[4]);
}

solve(4000, 0.60, 5);