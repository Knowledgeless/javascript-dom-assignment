let inputData = document.querySelector("#inputDate");
let inputButton = document.querySelector("#inputButton");
let age = document.querySelector("#age");

let year = 0;
let month = 0;
let day = 0;

inputButton.addEventListener("click", ()=>{
    let bdDate = new Date(inputData.value);
    let today = new Date();


    
    if (today.getFullYear() >= bdDate.getFullYear()){
        year = today.getFullYear() - bdDate.getFullYear();
        day = Math.abs(today.getDate() - bdDate.getDate());
        month = Math.abs((today.getMonth() + 1) - (bdDate.getMonth() + 1));
        age.innerHTML = `<b class="bolds">${year}</b> Years <b class="bolds">${month}</b> Months <b class="bolds">${day}</b> Days`;
    }
    else{
        alert("Birth Date is Invalid")
    }
    


})

