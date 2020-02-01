function solve() {
    let pad = document.getElementsByClassName('keys')[0];
    let output = document.getElementById('expressionOutput');
    let clearBtn = document.getElementsByClassName('clear')[0];
    let resultOutput = document.getElementById('resultOutput');

    let operators = ['+', '-', '*', '/', ','];
    //target = e.target.value
    pad.addEventListener('click', ({ target: { value } }) => {
        clearBtn.addEventListener('click', (e) => {
            output.innerHTML = '';
            resultOutput.innerHTML = '';
        })

        if (!value) {
            return;
        }
        if (value === '=') {
            resultOutput.innerHTML = eval(output.innerHTML);

        }
        if (operators.includes(value)) {
            value = ` ${value} `;
        }
        if (value === '=') {
            return;
        }
        output.innerHTML += value;
    })
}
