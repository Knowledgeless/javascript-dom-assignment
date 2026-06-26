let count = document.querySelector("#countNumber");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let reset = document.querySelector("#reset");



minus.addEventListener("click", ()=>{
    let value = Number(count.textContent)
    if (value == 0){
        alert("You can't go less then '0'")
        count.textContent = 0;
    }
    else{
        value -=1;
        count.textContent = value;
    }

})

plus.addEventListener("click", ()=>{
    let value = Number(count.textContent)
    value += 1;
    count.textContent = value;
})

reset.addEventListener("click", ()=>{
    let value = Number(count.textContent)
    value = 0;
    count.textContent = value;
})