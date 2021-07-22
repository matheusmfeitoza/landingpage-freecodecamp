function salvarData(){
    let getEmail = document.getElementById("email")
    let getBtn = document.getElementById("submit");
    getBtn.addEventListener('click',function(e){
        e.preventDefault();
        let emailValue = getEmail.value;
        localStorage.setItem('email',emailValue);
        location.reload();
    });
    if(getEmail.value === null || getEmail.value === '' && localStorage.email === undefined){
        localStorage.removeItem('email')
        getEmail.value = "" 
    
    }else{
        return getEmail.value = localStorage.email;
    }
    //  document.getElementById('email').value = localStorage.email;

}
salvarData();

