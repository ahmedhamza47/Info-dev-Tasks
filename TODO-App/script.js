const btn = document.querySelector(".btn-enter");
const display = document.querySelector(".display");

btn.addEventListener("click", function () {
  const inputText = document.querySelector(".inp").value;
  console.log(inputText);
  display.innerHTML = inputText;
  inputText.textContent = "";
});
