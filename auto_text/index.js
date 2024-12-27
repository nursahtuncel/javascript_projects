const dataCount = document.querySelectorAll(".auto_text");
console.log(dataCount);
let texts = [];
let reverse = false;
let idx = 0;
let txtNum = 0;
let speed = 200;
let waitAtEnd = 2;
dataCount.forEach((text) => {
  let data = text.getAttribute("data");
  texts.push(data);
  console.log(data);
});
let write = setInterval(() => {
  if (idx == 0 || (idx < texts[txtNum].length + waitAtEnd && !reverse)) {
    reverse = false;
    dataCount[0].innerHTML = texts[txtNum].toString().slice(0, idx);
    idx++;
  } else {
    reverse = true;
    dataCount[0].innerHTML = texts[txtNum].toString().slice(0, idx);
    idx--;
    if (idx == 0) {
      txtNum == texts.length - 1 ? (txtNum = 0) : txtNum++;
    }
  }
}, speed);
