function solve() {
   let button = document.getElementById('searchBtn');

   button.addEventListener('click', (e) => {
      let inputBox = document.getElementById('searchField')
      let inputSearch = inputBox.value;

      let tbody = document.getElementsByTagName('tbody')[0];
      let tr = tbody.getElementsByTagName('tr');
      let arr = Array.from(tr);

      //removing already selected
      arr.forEach(element => {
         element.removeAttribute('class');
      });
      
      for (let i = 0; i < arr.length; i++) {
         const element = arr[i].innerHTML;
         if (element.includes(inputSearch)) {
            arr[i].className = "select";
         }
      }

      inputBox.value = '';
   })
}