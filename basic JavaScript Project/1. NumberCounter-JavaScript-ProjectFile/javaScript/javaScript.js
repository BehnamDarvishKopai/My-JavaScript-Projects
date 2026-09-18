const currentNum = document.getElementById("number");
const increseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreseBtn = document.getElementById("decrease");
let neNum;

// increase button
increseBtn.addEventListener("click", function () {
  newNum = Number(currentNum.innerHTML) + 1;
  currentNum.innerHTML = newNum;
});

// reset button
resetBtn.addEventListener("click", function () {
  zeroNum = 0;
  currentNum.innerHTML = zeroNum;
});

// decrese button
decreseBtn.addEventListener("click", function () {
  newNum = Number(currentNum.innerHTML) - 1;
  currentNum.innerHTML = newNum;
});
