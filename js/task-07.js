const fontSizeEl = document.getElementById('font-size-control');
console.log(fontSizeEl);
const textEl = document.getElementById('text');
console.log(textEl);
 
fontSizeEl.addEventListener('input', () => {
    const newFontsize = fontSizeEl.value +  'px';
    textEl.style.fontSize = newFontsize;
});


// fontSizeEl.addEventListener('event', function (){
    
// })