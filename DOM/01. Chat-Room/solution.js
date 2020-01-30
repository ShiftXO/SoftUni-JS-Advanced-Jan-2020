function solve() {
   let sendBtn = document.getElementById('send');
   let chat = document.getElementById('chat_messages');

   sendBtn.addEventListener('click' || 'keypress', (e) => {
      let textBox = document.getElementById('chat_input');
      let inputText = textBox.value;

      let divToAdd = document.createElement('div');
      divToAdd.className = 'message my-message';
      divToAdd.innerHTML = inputText;

      chat.appendChild(divToAdd);

      textBox.value = '';
      
   })
}


