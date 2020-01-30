function solve() {
    let btn = document.getElementsByTagName('button')[0];
    let selectMenu = document.getElementById('selectMenuTo');

    //create option binary
    let option = document.createElement('option');
    option.innerText = 'Binary';
    option.value = 'binary';
    selectMenu.appendChild(option);

    //create option hexadecimal
    option = document.createElement('option');
    option.innerText = 'Hexadecimal';
    option.value = 'hexadecimal';
    selectMenu.appendChild(option);

    //event
    btn.addEventListener('click', (e) => {
        let numberInput = document.getElementById('input');
        let num = +numberInput.value;

        let selectMenu = document.getElementById('selectMenuTo');
        let chosen = selectMenu.value;
        let res = document.getElementById('result');

        if (chosen === 'binary') {
            res.value = num.toString(2);
        } else if (chosen === 'hexadecimal') {
            res.value = num.toString(16).toUpperCase();
        }
    })
}