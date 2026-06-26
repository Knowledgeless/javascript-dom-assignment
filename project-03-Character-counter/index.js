let charCounter = document.querySelector("#textArea");
let charNumbers = document.querySelector("#charNumbers");
let wordNumbers = document.querySelector("#wordNumbers");

charCounter.addEventListener("input", ()=>{
    let text = charCounter.value;
    charNumbers.textContent = text.length;
    
    // Word count
    let words = text.trim();

    if (words === "") {
        wordNumbers.textContent = 0;
    } else {
        wordNumbers.textContent = words.split(/\s+/).length;
    }
})