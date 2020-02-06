function solve() {
   let spanResult = document.querySelector('#result');
   let historyDiv = document.querySelector('#history');

   let leftSpan = spanResult.querySelector('span');
   let rightSpan = spanResult.querySelectorAll('span')[2];
   
   let cardOne;
   let cardTwo;

   let allCards = document.querySelector('section.cards');
   allCards.addEventListener('click', (e) => {

      if (e.target.parentNode.id === 'player1Div') {
         leftSpan.textContent = e.target.name;
         e.target.src = 'images/whiteCard.jpg';
         cardOne = e.target;
      } else if (e.target.parentNode.id === 'player2Div') {
         rightSpan.textContent = e.target.name;
         e.target.src = 'images/whiteCard.jpg';
         cardTwo = e.target;
      }

      if (leftSpan.textContent !== '' && rightSpan.textContent !== '') {
         if (+leftSpan.textContent > +rightSpan.textContent) {
            cardOne.style.border = '2px solid green';
            cardTwo.style.border = '2px solid red';
         } else {
            cardTwo.style.border = '2px solid green';
            cardOne.style.border = '2px solid red';
         }

         historyDiv.textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}] `;

         leftSpan.textContent = '';
         rightSpan.textContent = '';
      }
   })
}