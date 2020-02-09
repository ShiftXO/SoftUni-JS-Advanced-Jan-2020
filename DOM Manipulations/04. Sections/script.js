function create(words) {
   let el = document.querySelector('#content');

   let arr = Array.from(words);

   for (let i = 0; i < arr.length; i++) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.textContent = arr[i];
      p.style.display = 'none';
      div.appendChild(p);
      el.appendChild(div);
   }

   el.addEventListener('click', (e) => {
      let p = e.target.querySelector('p');
      p.style.display = 'block';
   })
}