function attachEventsListeners() {
    let inputDays = document.querySelector('#days');
    let inputHours = document.querySelector('#hours');
    let inputMinutes = document.querySelector('#minutes');
    let inputSeconds = document.querySelector('#seconds');

    let buttonDays = document.querySelector('#daysBtn');
    let buttonHours = document.querySelector('#hoursBtn');
    let buttonMinutes = document.querySelector('#minutesBtn');
    let buttonSeconds = document.querySelector('#secondsBtn');

    buttonDays.addEventListener('click', (e) => {
        let days = inputDays.value;
        inputHours.value = days * 24;
        inputMinutes.value = inputHours.value * 60;
        inputSeconds.value = inputMinutes.value * 60;
    })

    buttonHours.addEventListener('click', (e) => {
        let hours = inputHours.value;
        inputDays.value = hours / 24;
        inputMinutes.value = hours * 60;
        inputSeconds.value = inputMinutes.value * 60;
    })

    buttonMinutes.addEventListener('click', (e) => {
        let minutes = inputMinutes.value;
        inputHours.value = minutes / 60;
        inputDays.value = inputHours.value / 24;
        inputSeconds.value = minutes * 60;
    })

    buttonSeconds.addEventListener('click', (e) => {
        let seconds = inputSeconds.value;
        inputMinutes.value = seconds / 60;
        inputHours.value = inputMinutes.value / 60;
        inputDays.value = inputHours.value / 24;
    })
}