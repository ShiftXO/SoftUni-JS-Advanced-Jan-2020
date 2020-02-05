function solve() {
  let generateBtn = document.getElementsByTagName('button')[0];
  let tableBody = document.getElementsByTagName('tbody')[0];

  generateBtn.addEventListener('click', (e) => {
    let inputBox = document.getElementsByTagName('textarea')[0];
    let inputTxt = inputBox.value;
    let parsedInput = JSON.parse(inputTxt);

    for (const obj of parsedInput) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = obj.img;

      let td2 = document.createElement("td");
      td2.textContent = obj.name;

      let td3 = document.createElement("td");
      td3.textContent = obj.price;

      let td4 = document.createElement("td");
      td4.textContent = obj.decFactor;

      let td5 = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      td5.appendChild(input);

      td1.appendChild(img);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tableBody.appendChild(tr);
    }

    
  });
}