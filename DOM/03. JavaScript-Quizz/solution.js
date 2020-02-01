function solve() {
    let quizzie = document.getElementById('quizzie');
    let sections = document.getElementsByTagName('section');
    let result = document.querySelector('.results-inner h1');

    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let answers = 0;
    let curentStep = 0;

    quizzie.addEventListener('click', (e) => {
        if (e.target.className === 'answer-text') {
            sections[curentStep].style.display = 'none';
            let isCorrect = correctAnswers.includes(e.target.innerHTML);
            if (isCorrect) {
                answers++;
            }

            curentStep++;
            if (curentStep < correctAnswers.length) {
                sections[curentStep].style.display = 'block';
            }

            if (curentStep === correctAnswers.length) {
                document.querySelector('#results').style.display = 'block';

                result.innerHTML = correctAnswers.length === answers ?
                 "You are recognized as top JavaScript fan!" : `You have ${answers} right answers`
            }
        }
    })
}
