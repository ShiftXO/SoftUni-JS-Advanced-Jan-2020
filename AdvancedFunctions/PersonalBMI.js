function solve(name, age, weight, height) {
    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        }
    }

    let bimi = Math.round(weight / Math.pow(height / 100, 2));
    let status = '';
    if (bimi < 18.5) {
        status = 'underweight'
    } else if (bimi < 25) {
        status = 'normal'
    } else if (bimi < 30) {
        status = 'overweight'
    } else {
        status = 'obese'
    }

    obj.BMI = bimi;
    obj.status = status;

    if (bimi >= 30) {
        obj.recommendation = 'admission required'
    }

    return obj;
}

solve('Peter', 29, 75, 182);
solve('Honey Boo Boo', 9, 57, 137);