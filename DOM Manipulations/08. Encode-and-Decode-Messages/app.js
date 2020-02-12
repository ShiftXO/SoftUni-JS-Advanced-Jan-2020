function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('button')[0];
    
    encodeBtn.addEventListener('click', (e) => {
        let decodeBtn = document.querySelectorAll('button')[1];
        let output = document.querySelectorAll('textarea')[1];
        let originalInputSave = document.querySelectorAll('textarea')[0].value;
        
        let originalInput = document.querySelectorAll('textarea')[0];
        let encodedInput = originalInput.value.split('').map(x => x.charCodeAt(0) + 1).map(x => String.fromCharCode(x)).join('');
        
        output.value = encodedInput;
        originalInput.value = '';

        decodeBtn.addEventListener('click', (e) => {
            output.value = originalInputSave;
        });
    });
}