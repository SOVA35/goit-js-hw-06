const validationInputEl = document.getElementById('validation-input')
console.log(validationInputEl);

const totalLength = validationInputEl.getAttribute('data-length')
console.log(totalLength);

validationInputEl.addEventListener('blur', function () {
    const inputValue = validationInputEl.value;
    if (inputValue.length !== totalLength) {
        validationInputEl.classList.add('invalid');
            }
   }) 
