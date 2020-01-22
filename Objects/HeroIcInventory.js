function solve(params) {
    const heroes = [];

    for (let i = 0; i < params.length; i++) {
        let input = params[i].split('/');
        let inputName = input[0].trim();
        let inputLevel = +input[1];
        let inputItems = [];
        
        if (input.length > 2) {
            inputItems = input[2].split(',').map(item => item.trim());
        }

        const hero = {
            name: inputName,
            level: inputLevel,
            items: inputItems
        }

        heroes.push(hero);
    }

    let heroesToJSON = JSON.stringify(heroes);
    console.log(heroesToJSON);
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

solve(['Jake / 1000 / Gauss, HolidayGrenade']);