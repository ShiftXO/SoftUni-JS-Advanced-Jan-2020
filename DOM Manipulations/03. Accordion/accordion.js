function toggle() {
    let btn = document.querySelector('div.head span.button');

    let p = document.querySelector('#extra');

    if (p.style.display === 'none') {
        p.style.display = 'block';
        btn.textContent = 'Less'
    } else {
        p.style.display = 'none';
        btn.textContent = 'More'
    }
}