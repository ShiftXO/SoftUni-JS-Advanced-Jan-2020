(function () {
    let recipes =  {
        apple: { carbohydrate: 1, flavour:2 },
        lemonade: { carbohydrate: 10, flavour:20},
        burger: { carbohydrate: 5, flavour:3, fat:7},
        eggs: { protein: 5, flavour:1, fat:1},
        turkey: { protein: 10, carbohydrate:10, fat:10, flavour:10},
    };
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    
    function addProducts(component, quantity) {
        robot[component] += +quantity;
        return "Success"
    }

    function cook(component, amount) {
        let currentRecipe = recipes[component];
        let ingredients = Object.entries(currentRecipe);
        for (let [product, quantity] of ingredients){
            if (robot[product] < quantity * amount){
                return `Error: not enough ${product} in stock`
            }
        }
        for (let [product, quantity] of ingredients){
            robot[product] -= quantity * amount;
        }
        return "Success"
    }

    function report() {
       return Object.keys(robot).map((key) => { return `${key}=${robot[key]}`}).join(" ");
    }

    return function () {
        let [action, component, quantity] = arguments[0].split(" ");
        const commands = {
            restock: () => {
                return addProducts(component, quantity)
            },
            prepare: () => {
                return cook(component, +quantity)
            },
            report: () =>{
                return report()
            }
        };

        return commands[action]();
    };
});