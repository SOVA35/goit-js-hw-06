const validationInputEl = document.getElementById('validation-input')
// console.log(validationInputEl);

const totalLength = validationInputEl.getAttribute('data-length')
// console.log(totalLength);

validationInputEl.addEventListener('blur', function () {
    const inputValue = validationInputEl.value.length;
     const totalLength = parseInt(this.getAttribute('data-length'));
    if (inputValue === totalLength) {
        // validationInputEl.classList.remove('invalid')
        validationInputEl.classList.add('valid');        
    } else {
        // validationInputEl.classList.add('invalid');
        validationInputEl.classList.remove('valid');
            }
   }) 
