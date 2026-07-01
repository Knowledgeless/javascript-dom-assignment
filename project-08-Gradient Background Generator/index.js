let colorPicker1 = document.querySelector("#colorPicker1");
let colorPicker2 = document.querySelector("#colorPicker2");
let doneButton = document.querySelector("#doneButton");

const directions = [
    "to right",
    "to left",
    "to top",
    "to bottom",
    "45deg",
    "90deg",
    "135deg"
];


doneButton.addEventListener("click", ()=>{

    let color1 = colorPicker1.value;
    let color2 = colorPicker2.value;
    let dir = directions[Math.floor(Math.random() * directions.length)];
    if (color1 === "#ffffff" && color2 ==="#ffffff"){
        document.body.style.color = "#000";
    }
    else if(color1 === "#000000" && color2 === "#000000"){
        document.body.style.color = "#fff";
    }
    
    document.body.style.background = `linear-gradient(${dir}, ${color1}, ${color2})`;

    document.body.style.backgroundSize = "cover";

    colorCodeContainer.textContent = `Background: linear-gradient(${dir}, ${color1}, ${color2})`;

});
