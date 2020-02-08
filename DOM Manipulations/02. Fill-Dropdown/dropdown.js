function addItem() {
    let txt = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let selector = document.querySelector('select');
    let option = document.createElement('option');
    
    option.value = value.value;
    option.textContent = txt.value;

    selector.appendChild(option);

    txt.value = '';
    value.value = '';
}