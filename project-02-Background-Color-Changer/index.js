let colorPicker = document.querySelector("#colorPicker");
let doneButton = document.querySelector("#doneButton");
let colorCode = document.querySelector("#colorCode");

doneButton.addEventListener("click", ()=>{

    let color = colorPicker.value;
    if (color == "#ffffff"){
        document.body.style.color = "#000";
    }
    else if(color == "#000000"){
        document.body.style.color = "#fff";
    }
    
    document.body.style.backgroundColor = color;
    colorCode.textContent = color;

})
