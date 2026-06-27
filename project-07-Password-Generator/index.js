let inputNumber = document.querySelector("#inputNumber");
let inputButton = document.querySelector("#inputButton");
let password = document.querySelector("#password");

let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

inputButton.addEventListener("click", ()=>{
    let newPassword = ""
    for(let i=0; i<Number(inputNumber.value); i++){
        let randInt = Math.floor(Math.random() * characters.length);
        newPassword += characters[randInt]
    }
    password.innerHTML = `${newPassword}`
})