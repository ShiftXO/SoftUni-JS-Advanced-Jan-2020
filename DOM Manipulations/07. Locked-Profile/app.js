function lockedProfile() {
    let buttons = document.querySelectorAll('div#container main#main div.profile button');

    let main = document.querySelector('#main');
    let profiles = document.querySelectorAll('.profile');

    [...profiles].forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.tagName == 'BUTTON') {
                let targetPerson = e.target.parentNode.querySelector('div');
                let radioBtn = e.target.parentNode.querySelectorAll('input');

                if (!radioBtn[0].checked) {
                    if (e.target.textContent == 'Show more') {
                        targetPerson.style.display = 'block';
                        e.target.textContent = 'Hide it';
                    } else {
                        targetPerson.style.display = 'none';
                        e.target.textContent = 'Show more';
                    }
                }
            }
        })
    })
}