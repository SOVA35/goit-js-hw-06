
const form = document.querySelector("form");
const alertMessage = "You must fill out the form";


form.addEventListener('submit', handleSubmit);
    

function handleSubmit(event) {
    event.preventDefault();  
    
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;
     if (emailInput.value === '' || passwordInput.value === ''){
       
          return alert(alertMessage);
        
    } 
    
    const formData = new FormData(event.currentTarget);
    console.log(formData);
    
    formData.forEach((value, name) => {
        
        console.log("name", name);
        console.log("value", value);
        
    
        form.reset();
    })
      
  
    
     
}


