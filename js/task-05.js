const nameInputEl = document.getElementById('name-input');
console.log(nameInputEl)
const nameOutputEl = document.getElementById('name-output');
console.log(nameOutputEl)

nameInputEl.addEventListener("input", () => {
  const inputValue = nameInputEl.value.trim();
  nameOutputEl.textContent = inputValue !== "" ? inputValue : "Anonymous";
});