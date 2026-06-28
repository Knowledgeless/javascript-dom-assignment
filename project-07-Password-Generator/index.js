let inputNumber = document.querySelector("#inputNumber");
let inputButton = document.querySelector("#inputButton");
let password = document.querySelector("#password");

let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

inputButton.addEventListener("click", ()=>{
    
    if(inputNumber.value > 31){
        alert("Password Lenght Must Be Less Then 30..!");
    }
    else{
        let newPassword = ""
        for(let i=0; i<Number(inputNumber.value); i++){
            let randInt = Math.floor(Math.random() * characters.length);
            newPassword += characters[randInt];
        }
        if(Number(newPassword.length) === Number(inputNumber.value)){
            password.textContent = `${newPassword}`;
        }
        else{
            password.innerHTML = `Try Again..!`;
        }
    }
    
})