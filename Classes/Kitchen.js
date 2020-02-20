class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(productsArr) {
        [...productsArr].forEach(element => {
            let currentProduct = element.split(' ');
            let productName;
            let productQuantity;
            let productPrice;

            if (currentProduct.length === 4) {
                productName = currentProduct[0] + ' ' + currentProduct[1];
                productQuantity = +currentProduct[2];
                productPrice = +currentProduct[3];
            } else {
                productName = currentProduct[0];
                productQuantity = +currentProduct[1]
                productPrice = +currentProduct[2];
            }

            if (!Object.keys(this.productsInStock).includes(productName) &&
                this.budget - productPrice >= 0) {

                this.productsInStock[productName] = productQuantity;
                this.budget -= productPrice;

                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
                return `Successfully loaded ${productQuantity} ${productName}`;
            } else {
                if (this.budget - productPrice >= 0) {
                    this.productsInStock[productName] += productQuantity;
                    this.budget -= productPrice;

                    this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
                    return `Successfully loaded ${productQuantity} ${productName}`;
                }

                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
                return `There was not enough money to load ${productQuantity} ${productName}`;
            }
        });

    }

    addToMenu(meal, neededProducts, price) {
        let arr = {};
        neededProducts.forEach(element => {
            let obj = element.split(' ');
            let pr;
            let qua;

            if (obj.length === 3) {
                pr = obj[0] + ' ' + obj[1];
                qua = +obj[2];
            } else {
                pr = obj[0];
                qua = +obj[1];
            }

            arr[pr] = qua;
        });

        if (!Object.keys(this.menu).includes(meal)) {
            this.menu[meal] = {
                products: arr,
                price: price
            }

            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length > 0) {
            let output = '';
            for (const meal in this.menu) {
                output.push(`${meal} - $ ${this.menu[meal].price}`);
            }
            return output.join('\n') + '\n';
        } else {
            return `Our menu is not ready yet, please come later...`;
        }
    }

    makeTheOrder(meal) {
        if (this.menu[meal] === undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        let hasReqProducts = this.checkForProducts(this.menu[meal], this.productsInStock)

        if (!hasReqProducts) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this.budget += this.menu[meal].price;
        this.reduceProducts(this.menu[meal], this.productsInStock);
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }


    checkForProducts(reqProducts, availableProducts) {
        let res;
        for (const key in reqProducts.products) {
            if (Object.keys(availableProducts).includes(key) && availableProducts[key] >= reqProducts.products[key]) {
                res = true;
            } else {
                res = false;
                break;
            }
        }

        return res;
    }

    reduceProducts(meal, availableProducts) {
        for (const key in availableProducts) {
            availableProducts[key] -= meal.products[key];
        }
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder('frozenYogurt'));

